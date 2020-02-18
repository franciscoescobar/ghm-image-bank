import React from "react";
import { Image } from "./styled";
const ColumnImage = ({ image, handleImageClick }) => (
  <Image
    onClick={() => {
      handleImageClick(image);
    }}
    loading="lazy"
    src={image ? image.signedLowSrc : ""}
    alt={image ? image.name : ""}
  />
);

export default ColumnImage;
