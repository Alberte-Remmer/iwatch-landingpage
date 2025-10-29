import ImageCardButton from "./ImageCardButton";

const ImageCardList = ({ images }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
      }}
    >
      {images.map((img, i) => (
        <ImageCardButton key={i} src={img.src} bg={img.bg} />
      ))}
    </div>
  );
};

export default ImageCardList;
