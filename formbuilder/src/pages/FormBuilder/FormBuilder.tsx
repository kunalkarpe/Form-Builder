import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import FormSection from "./components/sections/FormSection";
import LeftSidebar from "./components/sections/LeftSidebar";
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
    function: { handelInputData },
  } = useFormBuilder();
  return (
    <div className="flex bg-primary/5 h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full ">
        <Navbar />
        <div className="grid grid-cols-12 p-2 gap-4 flex-1 bg-primary/5">
          <FormSection
            addedInput={addedInput}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            gridSize={gridSize}
            setGridSize={setGridSize}
          />
          <LeftSidebar
            basicInput={basicInput}
            setAddedInput={setAddedInput}
            toggle={toggle}
            setToggle={setToggle}
            handleInputData={handelInputData}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
