const ColorButton = ({ color, src, handleProductColor }) => {
  return (
    <div
      className="color-button"
      onClick={() => handleProductColor(src)}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "2px solid #fff",
        background: color,
      }}
    />
  );
};

export default ColorButton;
