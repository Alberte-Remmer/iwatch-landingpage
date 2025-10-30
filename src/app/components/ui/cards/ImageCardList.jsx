import ImageCardButton from "./ImageCardButton";

const ImageCardList = ({ images }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
      }}
    >
      {images.map((img) => (
        <ImageCardButton key={img.id} src={img.src} bg={img.bg} />
      ))}
    </div>
  );
};

export default ImageCardList;
