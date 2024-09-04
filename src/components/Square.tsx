interface SquareProps {
  children: React.ReactNode;
  isSelected: boolean;
  updateBoard: (index: number) => void;
  index: number;
}

const Square: React.FC<SquareProps> = ({
  children,
  isSelected,
  updateBoard,
  index,
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
