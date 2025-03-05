import { Controller, FormProvider, useForm } from "react-hook-form";
import SizeCard from "../../../../components/SizeCard/SizeCard";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import UiTextInputBase from "../../../../ui/Inputs/UiTextInputBase";
import { IFormSectionProps } from "../../formBuilder.types";
import UiSelector from "../../../../ui/Selectors/UiSelector";

const FormSection = ({
  addedInput,
  setSelectedInput,
  // selectedInput,
  gridSize,
  setGridSize,
}: IFormSectionProps) => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
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
          <div className="flex  gap-2  ">
            {/* <p className="text-sm font-semibold ">Form Grid Size :</p> */}
            <button
              onClick={() => {
                setGridSize("1");
              }}
              className="ring-1 ring-extraLightGray  rounded-sm  w-16  flex items-center p-1 hover:cursor-pointer"
            >
              <SizeCard width={16} />
            </button>
            <button
              onClick={() => {
                setGridSize("2");
              }}
              className="ring-1  w-16 ring-extraLightGray hover:cursor-pointer  rounded-sm flex items-center gap-1  p-1"
            >
              <SizeCard />
              <SizeCard />
            </button>

            <button
              onClick={() => {
                setGridSize("3");
              }}
              className="ring-1  ring-extraLightGray  rounded-sm w-16 flex items-center gap-1 p-1 hover:cursor-pointer"
            >
              <SizeCard />
              <SizeCard />
              <SizeCard />
            </button>
          </div>
        </div>
        {/* Form  */}
        <div className=" ring ring-extraLightGray shadow-lg rounded-md p-4 h-96 w-full ">
          <div className={`grid grid-cols-${gridSize} gap-4 `}>
            {addedInput?.map((input) => {
              console.log(input);
              return (
                <div
                  className={`h-fit p-1 w-44 ${" border border-dashed border-primary rounded-md"} `}
                  key={input?.id}
                >
                  <button onClick={() => setSelectedInput(input)}>
                    {input?.type === "Text" && (
                      <UiTextInput
                        name={input?.name}
                        label={input?.label}
                        placeholder={input?.placeholder}
                        registerOptions={{
                          required: `${input?.label} is required`,
                        }}
                      />
                    )}
                    {input?.type === "Selector" && (
                      <Controller
                        name={input?.name}
                        render={({ field: { value, onChange } }) => (
                          <UiSelector
                            value={value}
                            onChange={onChange}
                            options={[]}
                            // options={input?.option || []}

                            label={input?.label}
                            placeHolder={input?.placeholder}
                          />
                        )}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default FormSection;
