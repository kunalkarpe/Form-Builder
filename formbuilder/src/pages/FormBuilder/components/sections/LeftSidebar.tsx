import { PlusCircleIcon, PlusIcon } from "lucide-react";
import UiButton from "../../../../ui/Buttons/UiButton";
import { ILeftSideBarProps } from "../../formBuilder.types";
import UiButtonBase from "../../../../ui/Buttons/UiButtonBase";
import AddFieldModal from "../modal/AddFieldModal";

const LeftSidebar = ({
  basicInput,
  setAddedInput,
  toggle,
  setToggle,
}: ILeftSideBarProps) => {
  return (
    <div className="col-span-1 border border-extraLightGray bg-extraLightGray/40 flex flex-col items-center rounded-md gap-2 p-2 w-full relative">
      <p className="font-semibold text-body">Basic Inputs</p>
      <div className="flex flex-col gap-2  h-[calc(100vh-110px)] overflow-y-auto">
        {basicInput?.map((inputField) => {
          return (
            <div
              className="flex flex-col gap-2 ring-1 ring-lightGray rounded-md p-2 bg-white"
              key={inputField?.id}
            >
              <div className="flex  justify-between">
                {inputField?.comp}
                <UiButtonBase
                  icon={<PlusIcon className="size-2 text-primary" />}
                  className="rounded-full !w-4 !h-4 "
                  onClick={() => {
                    setAddedInput((prev) => [...prev, inputField]);
                  }}
                />
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
      {toggle && <AddFieldModal handleClose={() => setToggle(!toggle)} />}
    </div>
  );
};

export default LeftSidebar;
