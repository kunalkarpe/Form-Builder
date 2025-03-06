import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "lucide-react";

interface IUiCheckboxProps {
  value: boolean;
  onChange: () => void;
  label: string;
}
const UiCheckbox = ({ value, onChange, label }: IUiCheckboxProps) => {
  return (
    <div className="flex gap-2 h-7 items-center">
      <p className="text-xs font-semibold text-body">{label}</p>
      <Checkbox
        checked={value}
        onChange={onChange}
        className="group size-6 rounded-md p-1 ring-1 ring-extraLightGray ring-inset "
      >
        <CheckIcon className="hidden size-4 text-primary group-data-[checked]:block" />
      </Checkbox>
    </div>
  );
};

export default UiCheckbox;
