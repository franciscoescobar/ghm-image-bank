import React, { useState, useEffect } from "react";
import Image from "../Image";
import ImageModal from "../ImageModal";

import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageLoader from '../ImageLoader';

import { Container, LoaderWrapper } from "./styled";
import { getProductRequest, getProductsRequest, getProductsFilteredRequest } from '../../thunks/images';
import { useSelector, useDispatch } from 'react-redux';

const Images = () => {
  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    1000: 3,
    800: 2,
    500: 1
  };
  const dispatch = useDispatch();
  const [imagesChanged, setImagesChanged] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [clickedImage, setClickedImage] = useState({});
  const images = useSelector(state => state.imagesReducer);
  const user = useSelector(state => state.userReducer.user);
  const categories = useSelector(state => state.categoriesReducer.categories);

  const onImageClick = async image => {
    setImagesChanged(false);
    await getProductRequest(image._id)(dispatch);
    setClickedImage(image);
    setImagesChanged(true);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const fetchData = async () => {
    setImagesChanged(false);
    const filteredCategories = categories.filter(c => c.selected === true);
    if(filteredCategories.length > 0 ){
      await getProductsFilteredRequest(filteredCategories, images.page + 1)(dispatch);
    }
    else{
      await getProductsRequest(images.page + 1)(dispatch);
    }
    setImagesChanged(true);
  };

  useEffect(() => {
    if(images.page <= Math.ceil(images.totalItems / 20)){
      setHasMoreImages(true);
    }
    if(images.page >= Math.ceil(images.totalItems / 20)){
      setHasMoreImages(false);
    }
  }, [images.page, images.totalItems])

  return (
    <Container>
    { images.loading && imagesChanged  ?
          <LoaderWrapper>
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
            <ImageLoader />
          </LoaderWrapper>
        :
      <InfiniteScroll
        dataLength={images.posts.length || 9} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMoreImages}
        scrollThreshold="200px"
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
    }
      <ImageModal
        action={user.login ? "edit" : "view"}
        title="Imagen"
        show={showModal}
        onClose={handleClose}
        image={clickedImage}
      />
    </Container>
  );
};

export default Images;
