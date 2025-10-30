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
    <div className="grid-container">
      <div className="text-wrapper">
        <Text h1="The Perfect Moment" h2="Between Past And Future." />
      </div>
      <div className="button-wrapper">
        <PrimaryButton text="Buy Now" />
      </div>
      <div className="image-wrapper">
        <Image src={productColor} alt="Navy watch" />
      </div>
      <div className="shift-page-button-wrapper">
        <ShiftPageButton number={1} />
      </div>
      <div className="color-button-list-wrapper">
        <ColorButtonList colors={myColors} images={images} handleProductColor={handleProductColor} width={200} height={200} />
      </div>
      <div className="image-card-list-wrapper">
        <ImageCardList images={images} handleProductColor={handleProductColor} />
      </div>
    </div>
  );
}
