import { StarIcon } from "lucide-react";

interface ITextInputBaseProps {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  inputClassName?: string;
}

const UiTextInputBase = ({
  label,
  isRequired = true,
  placeholder,
  inputClassName,
}: ITextInputBaseProps) => {
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
          className="outline-none  "
        />
      </div>
    </div>
  );
};

export default UiTextInputBase;
