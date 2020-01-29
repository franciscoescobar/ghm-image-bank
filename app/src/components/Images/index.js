import React, { useState } from "react";
import Image from "./Image";
import ImageModal from "../ImageModal";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "./styled";
import { useSelector } from 'react-redux';
const Images = () => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
  };
  const [showModal, setShowModal] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [clickedImage, setClickedImage] = useState({});
  const images = useSelector(state => state.imagesReducer.posts);
  console.log(images);
  
  const onImageClick = image => {
    setClickedImage(image);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const fetchData = () => {
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
          {images.map((image, i) => {
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
