interface IBasicInputProps {
  id: number;
  type: string;
  gridSize: string;
  key: string;
  name: string;
  label: string;
  placeholder: string;
  option?: { id: number; name: string }[];
}

interface IFormSectionProps {
  addedInput: IBasicInputProps[];
  selectedInput: IBasicInputProps | null;
  setAddedInput: React.Dispatch<React.SetStateAction<IBasicInputProps[] | []>>;

  setSelectedInput: React.Dispatch<
    React.SetStateAction<IBasicInputProps | null>
  >;
  gridSize: string;
  setGridSize: React.Dispatch<React.SetStateAction<string>>;
}

interface ILeftSideBarProps {
  basicInput: IBasicInputProps[];
  setAddedInput: React.Dispatch<React.SetStateAction<IBasicInputProps[] | []>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputData: (data: IAddFieldFormSchema) => void;
}

interface IRightSideBarProps {
  selectedInput: IBasicInputProps | null;
}

interface IAddFieldFormSchema {
  label: string;
  placeholder: string;
  gridSize: {
    id: string;
    name: string;
  };
  key: string;
  inputType: {
    id: string;
    name: string;
  };
  option?: { option: string }[];
}

export type {
  IFormSectionProps,
  IBasicInputProps,
  ILeftSideBarProps,
  IRightSideBarProps,
  IAddFieldFormSchema,
};
