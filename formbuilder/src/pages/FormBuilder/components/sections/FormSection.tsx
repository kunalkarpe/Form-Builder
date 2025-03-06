import { Controller, FormProvider, useForm } from "react-hook-form";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import UiTextInputBase from "../../../../ui/Inputs/UiTextInputBase";
import UiSelector from "../../../../ui/Selectors/UiSelector";
import { IFormSectionProps } from "../../formBuilder.types";
import UiSwitch from "../../../../ui/Switch/UiSwitch";
import UiCheckbox from "../../../../ui/Checkbox/UiCheckbox";
import UiMultiSelector from "../../../../ui/Selectors/UiMultiSelector";
import { useState } from "react";

const FormSection = ({
  addedInput,
  setSelectedInput,
  setAddedInput,
}: // selectedInput,
// gridSize,
// setGridSize,
IFormSectionProps) => {
  const formMethods = useForm();
  const [multiState, setMultiState] = useState<{ id: number; name: string }[]>(
    []
  );
  const [draggedindex, setDraggedIndex] = useState<number>(0);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDraggedEnd = (index: number) => {
    if (index === draggedindex) return;

    setAddedInput((prev) => {
      const updateInputs = [...prev];
      [updateInputs[draggedindex], updateInputs[index]] = [
        updateInputs[index],
        updateInputs[draggedindex],
      ];
      return updateInputs;
    });
  };

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
              name="title"
              registerOptions={{
                required: "Title is required",
              }}
            />
            <UiTextInputBase
              placeholder="Add description here..."
              isRequired={false}
              inputClassName="!w-96 !ring-lightGray"
              name="description"
              registerOptions={{
                required: "Description is required",
              }}
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
        <div className="p-2 h-[calc(100vh-190px)] overflow-auto w-full ">
          <div className={`grid grid-cols-3 gap-4  `}>
            {addedInput?.map((input, index) => {
              return (
                <div
                  className={`h-fit p-2 ${" border border-dashed border-primary rounded-md"} `}
                  key={input?.id}
                  draggable={true}
                  onDragOver={(e) => e.preventDefault()}
                  onDragStart={() => handleDragStart(index)}
                  onDrop={() => handleDraggedEnd(index)}
                >
                  <button
                    onClick={() => setSelectedInput(input)}
                    className={`col-span-${input?.gridSize}`}
                  >
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
                            options={input?.option || []}
                            label={input?.label}
                            placeHolder={input?.placeholder}
                          />
                        )}
                      />
                    )}
                    {input?.type === "Multi Selector" && (
                      <div className="flex w-52">
                        <Controller
                          name={input?.name}
                          render={({ field: { value, onChange } }) => (
                            <UiMultiSelector
                              value={value}
                              onChange={onChange}
                              options={input?.option || []}
                              state={multiState}
                              setState={setMultiState}
                              label={input?.label}
                              placeHolder={input?.placeholder}
                            />
                          )}
                        />
                      </div>
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
