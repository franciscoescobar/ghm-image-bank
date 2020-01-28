import React from "react";
import { Image } from "./styled";
const ColumnImage = ({ image, handleImageClick }) => (
  <Image
    onClick={() => {
      handleImageClick(image);
    }}
    loading="lazy"
    src={image.src}
    alt={image.alt}
  />
);

export default ColumnImage;
