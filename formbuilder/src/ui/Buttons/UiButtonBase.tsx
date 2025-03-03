import { ReactNode } from "react";

interface IUiButtonBaseProps {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const UiButtonBase = ({
  icon,
  children,
  className,
  onClick,
}: IUiButtonBaseProps) => {
  return (
    <button
      onClick={onClick}
      className={`ring-1 ring-primary rounded-lg h-7 flex gap-2 justify-center items-center hover:cursor-pointer  ${className}`}
      type="button"
    >
      <p className="text-white">{icon ?? ""}</p>
      {children}
    </button>
  );
};

export default UiButtonBase;
