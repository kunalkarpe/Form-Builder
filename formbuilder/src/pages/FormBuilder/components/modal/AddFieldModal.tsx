import { FormProvider, useForm } from "react-hook-form";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import { X } from "lucide-react";
import UiSelector from "../../../../ui/Selectors/UiSelector";
import { GRID_OPTIONS } from "../../FormBuilder.constant";

const AddFieldModal = ({ handleClose }: { handleClose: () => void }) => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <div className="flex w-full h-full absolute bg-white !top-0 px-2">
        <button
          onClick={handleClose}
          className="top-1 absolute right-2 ring-1 ring-extraLightGray rounded-full p-1"
        >
          <X className="size-2" />
        </button>
        <form
          //   onSubmit={formMethods?.handleSubmit(handleInputData)}
          className="flex flex-col items-center  w-full"
        >
          <div className="flex justify-center ">
            <p>Add Field</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <UiTextInput placeholder="Enter label..." label="Label" />

            <UiTextInput
              placeholder="Enter Placeholder..."
              label="Placeholder"
            />

            <UiTextInput placeholder="Enter key..." label="Key" />
            <div className="    ">
              <UiSelector options={GRID_OPTIONS} label="GridSize" />
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddFieldModal;
