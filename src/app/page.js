"use client";
import React from "react";
import Image from "next/image";
import Navy from "../../public/navy.png";
import Mint from "../../public/mint.png";
import Ocean from "../../public/ocean.png";
import Text from "./components/content/Text";
import PrimaryButton from "./components/ui/buttons/PrimaryButton";
import ShiftPageButton from "./components/ui/buttons/ShiftPageButton";
import ColorButtonList from "./components/ui/buttons/ColorButtonList";
import ImageCardList from "./components/ui/cards/ImageCardList";
import { useState } from "react";

export default function Home() {
  const myColors = ["#434558", "#6ADDCC", "#F9CDC4"]; //Antallet af farver afgør antallet af cirkler
  const images = [
    { id: 1, src: Navy, bg: "#434558" },
    { id: 2, src: Mint, bg: "#6ADDCC" },
    { id: 3, src: Ocean, bg: "#F9CDC4" },
  ];

  const [productColor, setProductColor] = useState(images[0].src);

  const handleProductColor = (src) => {
    setProductColor(src);
  };

  return (
    <div className="mt-4 grid grid-cols-[2fr_1fr_0.2fr] grid-rows-[2fr_0.5fr] gap-x-14 gap-y-20">
      <div className="text-wrapper col-start-1 col-end-2 row-start-1 space-y-6! self-center">
        <Text h1="The Perfect Moment" h2="Between Past And Future." />
        <PrimaryButton text="Buy Now" />
      </div>

      <div className="col-start-2 col-end-3 row-start-1 row-end-2 self-center justify-self-end">
        <Image src={productColor} alt="Navy watch" />
      </div>
      <div className="col-start-1 row-start-2 self-end justify-self-start">
        <ShiftPageButton number={1} />
      </div>
      <div className="col-start-3 col-end-4 row-start-1 self-center justify-self-end">
        <ColorButtonList
          colors={myColors}
          images={images}
          productColor={productColor}
          handleProductColor={handleProductColor}
          width={200}
          height={200}
        />
      </div>
      <div className="col-start-2 col-end-3 row-start-2 self-end justify-self-center">
        <ImageCardList
          images={images}
          handleProductColor={handleProductColor}
        />
      </div>
    </div>
  );
}
