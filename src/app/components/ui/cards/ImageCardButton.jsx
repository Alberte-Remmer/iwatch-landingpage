import Image from "next/image";

const ImageCardButton = ({ src, bg }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <button className="image-card-button" style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer" }}>
        {/* Halv baggrund med lav opacity */}
        <div
          className="pseudo-element"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "70%",
            background: bg,
            opacity: 0.5,
            borderRadius: "10px",
            zIndex: 1,
          }}
        />{" "}
        {/* Billedet ovenpå */}
        <Image src={src} alt="" width={100} height={100} style={{ position: "relative", zIndex: 2 }} />
      </button>
    </div>
  );
};

export default ImageCardButton;
