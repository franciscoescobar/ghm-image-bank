import React, { useState } from "react";
import Image from "./Image";
import ImageModal from "../ImageModal";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "./styled";
import { getProductRequest, getProductsRequest } from '../../thunks/images';
import { useSelector, useDispatch } from 'react-redux';
const Images = () => {
  const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
  };
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [page, setPage] = useState(1);
  const [clickedImage, setClickedImage] = useState({});
  const images = useSelector(state => state.imagesReducer);
  
  const onImageClick = async image => {
    await getProductRequest(image._id)(dispatch);
    setClickedImage(image);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const fetchData = () => {
    setPage(page + 1);
    getProductsRequest(page)(dispatch);
    if(images.totalItems && page >= Math.ceil((images.totalItems / 5))) {
      setHasMoreImages(false);
    }
  };
  return (
    <Container>
      <InfiniteScroll
        dataLength={images.totalItems ? images.totalItems : 0} //This is important field to render the next data
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
          {images.posts ? images.posts.map((image, i) => {
            return (
              <Image handleImageClick={onImageClick} key={i} image={image} />
            );
          }) : ""}
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
