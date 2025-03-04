import { PlusCircleIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import UiButton from "../../../../ui/Buttons/UiButton";
import UiTextInput from "../../../../ui/Inputs/UiTextInput";
import {
  IAddFieldFormSchema,
  ILeftSideBarProps,
} from "../../formBuilder.types";
import AddFieldModal from "../modal/AddFieldModal";

const LeftSidebar = ({
  basicInput,
  setAddedInput,
  toggle,
  setToggle,
}: // handleInputData,
ILeftSideBarProps) => {
  const formMethods = useForm();

  const handleInputData = (data: IAddFieldFormSchema) => {
    console.log(data);
  };
  return (
    <FormProvider {...formMethods}>
      <div className="col-span-1 border border-extraLightGray bg-extraLightGray/40 flex flex-col items-center rounded-md gap-2 py-2 w-full relative">
        <p className="font-semibold text-body">Basic Inputs</p>
        <div className="flex flex-col gap-2  h-[calc(100vh-110px)] overflow-y-auto w-full px-2">
          {basicInput?.map((inputField) => {
            return (
              <div
                className="flex flex-col gap-2 ring-1 ring-lightGray rounded-md p-2 bg-white relative"
                key={inputField?.id}
              >
                <div className="flex  justify-between">
                  {inputField?.type === "Text" ? (
                    <UiTextInput
                      name={inputField?.name}
                      label={inputField?.label}
                      placeholder={inputField?.placeholder}
                      registerOptions={{
                        required: `${inputField?.label} is required`,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  <button
                    className="absolute right-2"
                    onClick={() =>
                      setAddedInput((prev) => [
                        ...prev,
                        {
                          id: 11,
                          type: inputField?.type,
                          gridSize: inputField?.gridSize,
                          key: inputField?.key,
                          name: inputField?.name,
                          label: inputField?.label,
                          placeholder: inputField?.placeholder,
                        },
                      ])
                    }
                  >
                    <PlusCircleIcon className="size-4 text-primary" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col absolute  bottom-2 w-full gap-2 px-4">
          <UiButton
            title="Add Fields"
            className="w-full"
            icon={<PlusCircleIcon className="size-4" />}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {toggle && (
          <AddFieldModal
            handleClose={() => setToggle(!toggle)}
            handleSubmit={handleInputData}
          />
        )}
      </div>
    </FormProvider>
  );
};

export default LeftSidebar;
