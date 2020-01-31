import React from "react";
import { Image } from "./styled";
const ColumnImage = ({ image, handleImageClick }) => (
  <Image
    onClick={() => {
      handleImageClick(image);
    }}
    loading="lazy"
    src={image ? image.src : ""}
    alt={image ? image.alt : ""}
  />
);

export default ColumnImage;
