const ColorButton = ({ color, src, isActive, handleProductColor }) => {
  return (
    <div
      className={`border-secondary h-7 w-7 cursor-pointer rounded-full border-2 transition-all duration-200 hover:scale-110 hover:shadow-xl ${
        isActive ? "border-secondary scale-120 border-[3px]" : ""
      }`}
      onClick={() => handleProductColor(src)}
      style={{
        background: color,
      }}
    />
  );
};

export default ColorButton;
