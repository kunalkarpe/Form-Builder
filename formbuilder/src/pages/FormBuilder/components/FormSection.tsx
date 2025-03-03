import SizeCard from "../../../components/SizeCard/SizeCard";
import UiTextInputBase from "../../../ui/Inputs/UiTextInputBase";

const FormSection = () => {
  return (
    <div className="col-span-3 flex flex-col gap-2 p-2 bg-offWhite">
      {/* Title and Image Section */}
      <div className="flex gap-2 border-b border-extraLightGray pb-2 items-start">
        <div className="flex">
          <span className="h-8 w-8 rounded-full border border-extraLightGray" />
        </div>
        <div className="flex flex-col gap-2   w-full">
          <UiTextInputBase
            placeholder="Add title here..."
            isRequired={false}
            inputClassName="!w-44 !ring-0"
          />
          <UiTextInputBase
            placeholder="Add description here..."
            isRequired={false}
            inputClassName="!w-96"
          />
        </div>
      </div>

      <div className="flex justify-end px-2  gap-2">
        <button
          onClick={() => {}}
          className="ring-1 ring-extraLightGray bg-extraLightGray  flex items-center p-1"
        >
          <SizeCard />
        </button>
        <button
          onClick={() => {}}
          className="ring-1  w-8 ring-extraLightGray bg-extraLightGray  flex items-center gap-1  p-1"
        >
          <SizeCard />
          <SizeCard />
        </button>

        <button
          onClick={() => {}}
          className="ring-1  ring-extraLightGray bg-extraLightGray w-8 flex items-center gap-1 p-1"
        >
          <SizeCard />
          <SizeCard />
          <SizeCard />
        </button>
      </div>
      <div className="grid grid-cols-3 border h-96">hey</div>
    </div>
  );
};

export default FormSection;
