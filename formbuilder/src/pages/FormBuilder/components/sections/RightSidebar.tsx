import { IRightSideBarProps } from "../../formBuilder.types";

const RightSidebar = ({ selectedInput }: IRightSideBarProps) => {
  return (
    <div className="col-span-4 flex flex-col gap-2 border border-extraLightGray rounded-md py-2 px-4 ">
      <p>Modify input</p>
      <div className="flex">
        {selectedInput ? (
          <div className="flex">{selectedInput?.comp}</div>
        ) : (
          "No input Selected"
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
