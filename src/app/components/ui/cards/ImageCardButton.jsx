import Image from "next/image";

const ImageCardButton = ({ src, bg, handleProductColor }) => {
  return (
    <div
      className="relative inline-block h-25 w-25 overflow-hidden rounded-lg"
      // style={{
      //   position: "relative",
      //   width: "100px",
      //   height: "100px",
      //   borderRadius: "1rem",
      //   overflow: "hidden",
      //   display: "inline-block",
      // }}
    >
      <button
        className="cursor-pointer border-none bg-transparent text-inherit transition-transform duration-200 hover:scale-110"
        onClick={() => handleProductColor(src)}
        // style={{
        //   background: "transparent",
        //   border: "none",
        //   color: "inherit",
        //   cursor: "pointer",
        // }}
      >
        {/* Halv baggrund med lav opacity */}
        <div
          className="absolute bottom-0 left-0 z-1 h-2/3 w-full rounded-lg opacity-50"
          style={{
            background: bg,
          }}
        />{" "}
        {/* Billedet ovenpå */}
        <Image
          src={src}
          alt=""
          width={100}
          height={100}
          className="relative z-2"
          // style={{ position: "relative", zIndex: 2 }}
        />
      </button>
    </div>
  );
};

export default ImageCardButton;
