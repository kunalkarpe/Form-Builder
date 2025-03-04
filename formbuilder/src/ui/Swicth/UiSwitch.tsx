import { Switch } from "@headlessui/react";
import { StarIcon } from "lucide-react";

interface IUiSwitchProps {
  value: boolean;
  onChange: () => void;
  label: string;
}

export default function UiSwitch({ value, onChange, label }: IUiSwitchProps) {
  return (
    <div className="flex gap-2">
      <p className="text-xs font-semibold text-body">
        {label ? (
          <div className="flex gap-1">
            <p>{label}</p>
            <StarIcon className="size-1 text-red-500 fill-red-500" />
          </div>
        ) : (
          ""
        )}
      </p>
      <Switch
        checked={value}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
}
