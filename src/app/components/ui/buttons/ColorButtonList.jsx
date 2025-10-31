import ColorButton from "./ColorButton";

// ShiftColor modtager et array af farver som prop
const ColorButtonList = ({ colors, images, productColor, handleProductColor }) => (
  // Container til cirkler og linjer
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* Mapper over farverne og opretter en ButtonColor for hver */}
    {colors.map((color, i) => (
      <div key={color}>
        {/* Viser en cirkel med den aktuelle farve */}
        <ColorButton color={color} isActive={images[i].src === productColor} src={images[i].src} handleProductColor={handleProductColor} /> {/* Key er en prop i React som identificerer hvert element i en liste*/}
        {/* Tilføjer en lodret linje efter hver cirkel, undtagen den sidste */}
        {i < colors.length - 1 && (
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "#fff",
              margin: "auto",
            }}
          />
        )}
      </div>
    ))}
  </div>
);

export default ColorButtonList;
