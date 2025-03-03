import FormSection from "./components/FormSection";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
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
    },
  } = useFormBuilder();
  return (
    <div className="grid grid-cols-5 h-screen">
      <LeftSidebar basicInput={basicInput} setAddedInput={setAddedInput} />
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
