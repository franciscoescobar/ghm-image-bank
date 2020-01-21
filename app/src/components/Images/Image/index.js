import React from "react";
import { Image } from "./styled";
const ColumnImage = ({ images, handleImageClick }) => (
  <Image
    onClick={handleImageClick}
    loading="lazy"
    src={images.src}
    alt={images.alt}
  />
);

export default ColumnImage;
