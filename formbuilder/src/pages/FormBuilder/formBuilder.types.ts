import { ReactNode } from "react";

interface IBasicInputProps {
  id: number;
  comp: ReactNode;
}

interface IFormSectionProps {
  addedInput: IBasicInputProps[];
  selectedInput: IBasicInputProps | null;
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
}

interface IRightSideBarProps {
  selectedInput: IBasicInputProps | null;
}

export type {
  IFormSectionProps,
  IBasicInputProps,
  ILeftSideBarProps,
  IRightSideBarProps,
};
