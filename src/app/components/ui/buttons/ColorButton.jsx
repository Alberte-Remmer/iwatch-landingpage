const ColorButton = ({ color, src, isActive, handleProductColor }) => {
  return (
    <div
      className={`color-button ${isActive ? "active" : ""}`}
      onClick={() => handleProductColor(src)}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: color,
      }}
    />
  );
};

export default ColorButton;
