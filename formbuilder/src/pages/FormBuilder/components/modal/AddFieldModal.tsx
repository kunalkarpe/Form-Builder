import { Controller, FormProvider, useForm } from "react-hook-form";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import { X } from "lucide-react";
import UiSelector from "../../../../ui/Selectors/UiSelector";
import { GRID_OPTIONS, INPUT_TYPE_OPTIONS } from "../../FormBuilder.constant";
import UiButton from "../../../../ui/Buttons/UiButton";
import { IAddFieldFormSchema } from "../../formBuilder.types";
import SelectorOptions from "../fieldArrayComponents/SelectorOptions";

const AddFieldModal = ({
  handleClose,
  handleSubmit,
}: {
  handleClose: () => void;
  handleSubmit: (data: IAddFieldFormSchema) => void;
}) => {
  const formMethods = useForm<IAddFieldFormSchema>();

  return (
    <FormProvider {...formMethods}>
      <div className="flex w-full h-full absolute bg-white !top-0 px-2">
        <button
          type="button"
          onClick={handleClose}
          className="top-1 absolute z-50 right-2 ring-1 ring-extraLightGray rounded-full p-1 border  "
        >
          <X className="size-2" />
        </button>
        <form
          onSubmit={formMethods?.handleSubmit(handleSubmit)}
          className="flex flex-col items-center relative  w-full"
        >
          <div className="flex justify-center ">
            <p>Add Field</p>
          </div>
          <div className="flex flex-col gap-2 w-full h-[calc(100vh-150px)] overflow-y-auto">
            <Controller
              name="inputType"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => (
                <UiSelector
                  label="Input Type"
                  value={value}
                  onChange={onChange}
                  options={INPUT_TYPE_OPTIONS || []}
                />
              )}
            />
            <UiTextInput
              name="label"
              placeholder="Enter label..."
              label="Label"
              registerOptions={{
                required: "Label is required",
              }}
            />
            {!["Checkbox", "Selector"]?.includes(
              formMethods?.watch("inputType")?.name
            ) && (
              <UiTextInput
                name="placeholder"
                placeholder="Enter Placeholder..."
                label="Placeholder"
                registerOptions={{
                  required: "Placeholder is required",
                }}
              />
            )}

            <UiTextInput
              placeholder="Enter key..."
              label="Key"
              name="key"
              registerOptions={{
                required: "Key is required",
              }}
            />
            <Controller
              name="gridSize"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => (
                <UiSelector
                  value={value}
                  onChange={onChange}
                  placeHolder="Select grid size..."
                  options={GRID_OPTIONS}
                  label="GridSize"
                />
              )}
            />

            {formMethods?.watch("inputType")?.name === "Selector" && (
              <SelectorOptions />
            )}
          </div>

          <UiButton
            title="Submit"
            type="submit"
            className="w-full text-sm absolute bottom-2"
          />
        </form>
      </div>
    </FormProvider>
  );
};

export default AddFieldModal;
