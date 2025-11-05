import ColorButton from "./ColorButton";

// ShiftColor modtager et array af farver som prop
const ColorButtonList = ({
  colors,
  images,
  productColor,
  handleProductColor,
}) => (
  // Container til cirkler og linjer
  <div className="flex flex-col items-center">
    {/* Mapper over farverne og opretter en ButtonColor for hver */}
    {colors.map((color, i) => (
      <>
        <ColorButton
          key={color}
          color={color}
          isActive={images[i].src === productColor}
          src={images[i].src}
          handleProductColor={handleProductColor}
        />
        {/* Tilføjer en lodret linje efter hver cirkel, undtagen den sidste */}
        {i < colors.length - 1 && <div className="h-10 w-0.5 bg-secondary" />}
      </>
    ))}
  </div>
);

export default ColorButtonList;
