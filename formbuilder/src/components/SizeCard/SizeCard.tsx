interface ISizeCardProps {
  className?: string;
  width?: number;
}

const SizeCard = ({ className, width = 8 }: ISizeCardProps) => {
  return (
    <div
      className={`w-${width} h-2 ring-1 ring-extraLightGray bg-extraLightGray rounded-xs ${className}`}
    />
  );
};

export default SizeCard;
