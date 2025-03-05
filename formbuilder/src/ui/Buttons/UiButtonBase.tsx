import { ReactNode } from "react";

interface IUiButtonBaseProps {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

const UiButtonBase = ({
  icon,
  children,
  className,
  onClick,
  title,
}: IUiButtonBaseProps) => {
  return (
    <button
      onClick={onClick}
      className={`border border-primary rounded-lg   flex gap-2 justify-center items-center hover:cursor-pointer  ${className}`}
      type="button"
      title={title}
    >
      <p className="text-white">{icon ?? ""}</p>
      {children}
    </button>
  );
};

export default UiButtonBase;
