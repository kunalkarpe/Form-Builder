import { useState } from "react";
import { BASIC_INPUT_FIELDS } from "../FormBuilder.constant";
import { IAddFieldFormSchema, IBasicInputProps } from "../formBuilder.types";

export default function useFormBuilder() {
  const [basicInput, setBasicInputs] =
    useState<IBasicInputProps[]>(BASIC_INPUT_FIELDS);
  const [addedInput, setAddedInput] = useState<IBasicInputProps[] | []>([]);
  const [selectedInput, setSelectedInput] = useState<IBasicInputProps | null>(
    null
  );
  const [gridSize, setGridSize] = useState<string>("3");
  const [toggle, setToggle] = useState(false);
  console.log(addedInput);
  const handelInputData = (data: IAddFieldFormSchema) => {
    console.log(data);

    const newComp = {
      id: basicInput?.length + 1,
      type: data?.inputType?.name,
      gridSize: data?.gridSize?.name,
      key: data?.key,
      name: data?.label,
      label: data?.label,
      placeholder: "Enter name...",
    };
    setBasicInputs((prev) => [...prev, newComp]);
    setToggle(!toggle);
  };
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
      toggle,
      setToggle,
    },
    function: { handelInputData },
  };
}
