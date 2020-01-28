import React, { useState } from "react";
import Image from "./Image";
import ImageModal from "../ImageModal";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "./styled";
const Images = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
  };
  const [showModal, setShowModal] = useState(false);
  const [partialImages, setPartialImages] = useState(images.slice(0, 5));
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [clickedImage, setClickedImage] = useState({});
  const onImageClick = image => {
    setClickedImage(image);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const fetchData = () => {
    setPartialImages(images);
    setHasMoreImages(false);
  };
  return (
    <Container>
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMoreImages}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all</b>
          </p>
        }
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {partialImages.map((image, i) => {
            return (
              <Image handleImageClick={onImageClick} key={i} image={image} />
            );
          })}
        </Masonry>
      </InfiniteScroll>
      <ImageModal
        action={"view"}
        title="Imagen"
        show={showModal}
        onClose={handleClose}
        image={clickedImage}
      />
    </Container>
  );
};

export default Images;
