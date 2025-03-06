import { StarIcon } from "lucide-react";
import {
  FieldValues,
  RegisterOptions,
  useFormContext
} from "react-hook-form";

interface ITextInputBaseProps {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  inputClassName?: string;
  className?: string;
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
}

const UiTextInputBase = ({
  label,
  isRequired = true,
  placeholder,
  inputClassName,
  name,
  registerOptions,
}: ITextInputBaseProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col ">
      <div className="flex gap-1 ">
        <p className="text-xs text-lightGray">{label}</p>
        {isRequired && (
          <StarIcon className="size-1 text-red-500 fill-red-500" />
        )}
      </div>
      <div
        className={`flex rounded-sm px-2 h-7 w-full text-sm ring-1 ring-extraLightGray ${inputClassName}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none "
          {...register(name, registerOptions)}
        />
      </div>
    </div>
  );
};

export default UiTextInputBase;
