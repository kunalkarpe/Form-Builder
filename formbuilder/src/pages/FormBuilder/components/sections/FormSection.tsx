import { Controller, FormProvider, useForm } from "react-hook-form";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import UiTextInputBase from "../../../../ui/Inputs/UiTextInputBase";
import UiSelector from "../../../../ui/Selectors/UiSelector";
import { IFormSectionProps } from "../../formBuilder.types";
import UiSwitch from "../../../../ui/Switch/UiSwitch";
import UiCheckbox from "../../../../ui/Checkbox/UiCheckbox";

const FormSection = ({
  addedInput,
  setSelectedInput,
}: // selectedInput,
// gridSize,
// setGridSize,
IFormSectionProps) => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <div className="col-span-9 border border-extraLightGray rounded-md flex flex-col gap-2 p-2 bg-white shadow-md">
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
        {/* <div className="flex px-2 justify-end gap-2">
          <div className="flex  gap-2  ">
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
        </div> */}
        {/* Form  */}
        <div className="p-2 h-96 w-full ">
          <div
            className={`grid grid-cols-3 gap-4 h-[calc(100vh-190px)] overflow-auto`}
          >
            {addedInput?.map((input) => {
              console.log(input);
              return (
                <div
                  className={`h-fit  p-1 w-44 ${" border border-dashed border-primary rounded-md"} `}
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

                    {input?.type === "Toggle" && (
                      <Controller
                        name={input?.name}
                        control={formMethods?.control}
                        render={({ field: { value, onChange } }) => (
                          <UiSwitch
                            value={value}
                            onChange={onChange}
                            label={input?.label}
                          />
                        )}
                      />
                    )}
                    {input?.type === "Checkbox" && (
                      <Controller
                        name={input?.name}
                        control={formMethods?.control}
                        render={({ field: { value, onChange } }) => (
                          <UiCheckbox
                            value={value}
                            onChange={onChange}
                            label={input?.label}
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
