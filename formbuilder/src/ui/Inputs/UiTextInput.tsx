import { StarIcon } from "lucide-react";

interface ITextInputProps {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
}

const UiTextInput = ({
  label,
  isRequired = true,
  placeholder,
}: ITextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 ">
        <p className="text-xs text-body">{label}</p>
        {isRequired && (
          <StarIcon className="size-1  text-red-500 fill-red-500" />
        )}
      </div>
      <div className="flex border border-extraLightGray rounded-md px-2 text-sm">
        <input type="text" placeholder={placeholder} className="outline-none" />
      </div>
    </div>
  );
};

export default UiTextInput;
