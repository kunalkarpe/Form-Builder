import { ReactNode } from "react";

interface IUiButtonProps {
  icon?: ReactNode;
  title?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

const UiButton = ({
  icon,
  title = "Add",
  children,
  className,
  onClick,
  type = "button",
}: IUiButtonProps) => {
  return (
    <button
      className={`ring-1 ring-primary rounded-lg h-7 flex gap-2 justify-center items-center bg-primary ${className}`}
      type={type}
      onClick={onClick}
    >
      <p className="text-white">{icon ?? ""}</p>
      <p className="text-white">{title ?? ""}</p>
      {children}
    </button>
  );
};

export default UiButton;
