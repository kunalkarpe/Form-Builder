import { PlusCircleIcon } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import UiButton from "../../../../ui/Buttons/UiButton";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import UiButtonBase from "../../../../ui/Buttons/UiButtonBase";

const SelectorOptions = () => {
  const { control } = useFormContext();
  const { append, fields } = useFieldArray({
    name: "option",
    control: control,
  });
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center">
        <p className="text-xs font-semibold text-body">Options</p>
        <UiButtonBase
          onClick={() => append({})}
          className=" !border-none !px-2 !py-1 self-end"
          title="Add Option"
          icon={<PlusCircleIcon className="size-4 text-primary" />}
        />
      </div>
      {fields?.map((fieldUnit, index) => {
        return (
          <div key={fieldUnit.id} className="flex gap-2 w-full">
            <UiTextInput
              name={`option.${index}.option`}
              isRequired={false}
              placeholder="Enter options..."
              registerOptions={{
                required: "Option is required",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SelectorOptions;
