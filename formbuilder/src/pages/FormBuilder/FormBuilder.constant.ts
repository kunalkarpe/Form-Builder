import { IBasicInputProps } from "./formBuilder.types";

const BASIC_INPUT_FIELDS: IBasicInputProps[] = [
  {
    id: 1,
    type: "Text",
    gridSize: "1",
    key: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter name...",
  },
  {
    id: 2,
    type: "Text",
    gridSize: "1",
    key: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter email...",
  },
  {
    id: 3,
    type: "Text",
    gridSize: "1",
    key: "contact_no",
    name: "contact_no",
    label: "Contact No.",
    placeholder: "Enter contact number...",
  },
  {
    id: 4,
    type: "Text",
    gridSize: "1",
    key: "address",
    name: "Address",
    label: "Address",
    placeholder: "Enter address...",
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

const INPUT_TYPE_OPTIONS = [
  {
    id: 1,
    name: "Text",
  },
  {
    id: 4,
    name: "Number",
  },
  {
    id: 2,
    name: "Selector",
  },
  {
    id: 3,
    name: "Toggle",
  },
];

export { BASIC_INPUT_FIELDS, GRID_OPTIONS, INPUT_TYPE_OPTIONS };
