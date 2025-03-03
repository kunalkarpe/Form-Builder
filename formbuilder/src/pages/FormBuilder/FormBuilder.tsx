import FormSection from "./components/FormSection";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const FormBuilder = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <LeftSidebar />
      <FormSection />
      <RightSidebar />
    </div>
  );
};

export default FormBuilder;
