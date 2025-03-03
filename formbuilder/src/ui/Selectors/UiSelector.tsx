import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface IUiSelectorProps {
  label?: string;
  options: {
    id: number;
    name: string;
  }[];
}

function UiSelector({ options, label }: IUiSelectorProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{ id: number; name: string } | null>(
    options[0]
  );
  const filteredOptions =
    query === ""
      ? options
      : options.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className=" w-52  flex flex-col  ">
      <p className="text-xs text-body">{label}</p>
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border border-extraLightGray bg-white py-1.5 pr-8 pl-3 text-sm ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
            )}
            displayValue={(person: { name: string }) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDown className="size-4  text-primary " />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-extraLightGray bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredOptions.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-primary/70 data-[focus]:text-white"
            >
              <div className="text-sm/6 ">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}

export default UiSelector;
