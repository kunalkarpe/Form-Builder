import FormSection from "./components/sections/FormSection";
import LeftSidebar from "./components/sections/LeftSidebar";
import RightSidebar from "./components/sections/RightSidebar";
import useFormBuilder from "./hooks/useFormBuilder";

const FormBuilder = () => {
  const {
    states: {
      addedInput,
      basicInput,
      selectedInput,
      setAddedInput,
      // setBasicInputs,
      setSelectedInput,
      gridSize,
      setGridSize,
      toggle,
      setToggle,
    },
  } = useFormBuilder();
  return (
    <div className="grid grid-cols-5 h-screen">
      <LeftSidebar
        basicInput={basicInput}
        setAddedInput={setAddedInput}
        toggle={toggle}
        setToggle={setToggle}
      />
      <FormSection
        addedInput={addedInput}
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
        gridSize={gridSize}
        setGridSize={setGridSize}
      />
      <RightSidebar selectedInput={selectedInput} />
    </div>
  );
};

export default FormBuilder;
