import UiTextInput from "../../ui/Inputs/UiTextInput";
import { IBasicInputProps } from "./formBuilder.types";

const BASIC_INPUT_FIELDS: IBasicInputProps[] = [
  {
    id: 1,
    comp: <UiTextInput placeholder="Enter your name..." label="Name" />,
  },
  {
    id: 2,
    comp: <UiTextInput placeholder="Enter your email..." label="Email" />,
  },
  {
    id: 3,
    comp: (
      <UiTextInput placeholder="Enter your number..." label="Contact No." />
    ),
  },
  {
    id: 4,
    comp: <UiTextInput placeholder="Enter your address..." label="Address" />,
  },
];

const GRID_OPTIONS = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
];

export { BASIC_INPUT_FIELDS, GRID_OPTIONS };
