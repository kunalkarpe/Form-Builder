import SizeCard from "../../../components/SizeCard/SizeCard";
import UiTextInputBase from "../../../ui/Inputs/UiTextInputBase";
import { IFormSectionProps } from "../formBuilder.types";

const FormSection = ({
  addedInput,
  setSelectedInput,
  selectedInput,
  gridSize,
  setGridSize,
}: IFormSectionProps) => {
  return (
    <div className="col-span-3 flex flex-col gap-2 p-2 ">
      {/* Title and Image Section */}
      <div className="flex gap-2 border-b border-extraLightGray pb-2 items-start">
        <div className="flex">
          <span className="h-8 w-8 rounded-full border border-lightGray" />
        </div>
        <div className="flex flex-col gap-2   w-full">
          <UiTextInputBase
            placeholder="Add title here..."
            isRequired={false}
            inputClassName="!w-44 !ring-lightGray"
          />
          <UiTextInputBase
            placeholder="Add description here..."
            isRequired={false}
            inputClassName="!w-96 !ring-lightGray"
          />
        </div>
      </div>
      <div className="flex px-2 justify-end gap-2">
        <div className="flex  gap-2">
          {/* <p className="text-sm font-semibold ">Form Grid Size :</p> */}
          <button
            onClick={() => {
              setGridSize("1");
            }}
            className="ring-1 ring-extraLightGray  rounded-sm  w-16  flex items-center p-1"
          >
            <SizeCard width={16} />
          </button>
          <button
            onClick={() => {
              setGridSize("2");
            }}
            className="ring-1  w-16 ring-extraLightGray   rounded-sm flex items-center gap-1  p-1"
          >
            <SizeCard />
            <SizeCard />
          </button>

          <button
            onClick={() => {
              setGridSize("3");
            }}
            className="ring-1  ring-extraLightGray  rounded-sm w-16 flex items-center gap-1 p-1"
          >
            <SizeCard />
            <SizeCard />
            <SizeCard />
          </button>
        </div>
      </div>
      {/* Form  */}
      <div className=" ring ring-extraLightGray shadow-lg rounded-md p-4 h-96 w-full ">
        <div className={`grid grid-cols-${gridSize} gap-4`}>
          {addedInput?.map((input) => {
            const isSelected = input?.id === selectedInput?.id;
            return (
              <div
                className={`h-fit p-1  ${
                  isSelected
                    ? " border border-dashed border-primary rounded-md"
                    : " "
                } `}
                key={input?.id}
              >
                <button onClick={() => setSelectedInput(input)}>
                  {input?.comp}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
