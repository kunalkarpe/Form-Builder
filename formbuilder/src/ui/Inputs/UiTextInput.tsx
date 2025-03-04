import { StarIcon } from "lucide-react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

interface ITextInputProps {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
}

const UiTextInput = ({
  label,
  isRequired = true,
  placeholder,
  name,
  registerOptions,
}: ITextInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 ">
        <p className="text-xs font-semibold text-body">{label}</p>
        {isRequired && registerOptions?.required && (
          <StarIcon className="size-1  text-red-500 fill-red-500" />
        )}
      </div>
      <div className="flex border border-extraLightGray rounded-md px-2 text-sm">
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none text-xs h-7"
          {...register(name, registerOptions)}
        />
      </div>
    </div>
  );
};

export default UiTextInput;
