import ColorButton from "./ColorButton";

// ShiftColor modtager et array af farver som prop
const ColorButtonList = ({ colors }) => (
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
      <div>
        {/* Viser en cirkel med den aktuelle farve */}
        <ColorButton key={i} color={color} /> {/* Key er en prop i React som identificerer hvert element i en liste*/}
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
