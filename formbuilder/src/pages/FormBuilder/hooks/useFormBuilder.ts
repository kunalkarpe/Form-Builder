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
    // const name = data?.label?.toLocaleLowerCase();
    // const placeholder = data?.placeholder;
    // const label = data?.label;
    // const gridSize = data?.gridSize?.name;
    // const keyName = data?.key;
    // if (data?.inputType?.name === "Text") {
    //   const newComp = {
    //     id: basicInput?.length + 1,

    //     gridSize: gridSize,
    //     key: keyName,
    //   };

    //   setBasicInputs([...basicInput, newComp]);
    //   setAddedInput([...addedInput, newComp]);
    //   setToggle(!toggle);
    // }
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
