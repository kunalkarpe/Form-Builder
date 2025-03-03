import { useState } from "react";
import { BASIC_INPUT_FIELDS } from "../FormBuilder.constant";
import { IBasicInputProps } from "../formBuilder.types";

export default function useFormBuilder() {
  const [basicInput, setBasicInputs] =
    useState<IBasicInputProps[]>(BASIC_INPUT_FIELDS);
  const [addedInput, setAddedInput] = useState<IBasicInputProps[] | []>([]);
  const [selectedInput, setSelectedInput] = useState<IBasicInputProps | null>(
    null
  );
  const [gridSize, setGridSize] = useState<string>("3");
  console.log(selectedInput);
  return {
    states: {
      basicInput,
      setBasicInputs,
      addedInput,
      setAddedInput,
      selectedInput,
      setSelectedInput,
      gridSize,
      setGridSize,
    },
  };
}
