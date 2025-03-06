import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown, StarIcon, X } from "lucide-react";
import { useState } from "react";

interface IUiMultiSelectorProps {
  label?: string;
  options: {
    id: number;
    name: string;
  }[];
  value?: Record<string, string> | null;
  onChange: (value: IUiMultiSelectorProps["value"]) => void;
  placeHolder?: string;
  state: { id: number; name: string }[];
  setState: (data: { id: number; name: string }[]) => void;
}
const UiMultiSelector = ({
  options,
  label,
  value,
  onChange,
  placeHolder = "Search name...",
  state,
  setState,
}: IUiMultiSelectorProps) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className=" w-full  flex flex-col gap-1 ">
      <div className="flex gap-1">
        <p className="text-xs font-semibold text-body">{label}</p>
        <StarIcon className="text-red-500 fill-red-500 size-1" />
      </div>
      <Combobox
        value={value}
        onChange={(value) => {
          onChange(value);
          setState((prev: { id: number; name: string }[]) => [...prev, value]);
        }}
        onClose={() => setQuery("")}
      >
        <ComboboxButton className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border   border-extraLightGray bg-white py-1.5 pr-8 pl-3 text-xs ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
            )}
            displayValue={(person: { name: string }) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeHolder}
          />

          <ChevronDown className="size-4  text-primary absolute right-4 top-2" />
        </ComboboxButton>

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
              className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 text-body font-semibold select-none data-[focus]:bg-primary/70 data-[focus]:text-white"
            >
              <div className="text-xs">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>

      {state?.length > 1 && (
        <div className="flex gap-2 flex-wrap w-56">
          {state?.map((unit) => {
            return (
              <div
                className="flex gap-2 px-2 items-center py-1 rounded-full ring-1 ring-primary "
                key={unit?.id}
              >
                <p className="text-xs text-body flex gap-2">{unit?.name}</p>
                <X
                  className="size-3"
                  onClick={() => {
                    const newState = state.filter(
                      (item) => item.id !== unit.id
                    );
                    setState(newState);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UiMultiSelector;
