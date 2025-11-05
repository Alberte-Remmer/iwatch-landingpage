import ImageCardButton from "./ImageCardButton";

const ImageCardList = ({ images, handleProductColor }) => {
  return (
    <div className="flex gap-6"
      // style={{
      //   display: "flex",
      //   gap: "1.5rem",
      // }}
    >
      {images.map((img) => (
        <ImageCardButton key={img.id} src={img.src} bg={img.bg} handleProductColor={handleProductColor} />
      ))}
    </div>
  );
};

export default ImageCardList;
