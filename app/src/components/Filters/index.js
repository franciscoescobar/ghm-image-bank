import React, { useState } from "react";
import Filter from "./Filter";
import { Wrapper, AddButton } from "./styled";
import ImageModal from "../ImageModal";
const Filters = ({ filters }) => {
  const [updatedFilters, setUpdatedFilters] = useState(filters);
  const [showModal, setShowModal] = useState(false);
  const handleFitlerClick = text => {
    setUpdatedFilters(
      filters.map(filter => {
        filter.selected = false;
        if (filter.text === text) {
          filter.selected = true;
        }
        return filter;
      })
    );
  };
  const onImageClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Wrapper>
      <p>Sorted by:</p>
      {updatedFilters.map((filter, i) => {
        return (
          <Filter
            onfilterClicked={handleFitlerClick}
            key={i}
            text={filter.text}
            selected={filter.selected}
          />
        );
      })}
      <AddButton onClick={onImageClick}>
        <i class="fas fa-plus"></i>
      </AddButton>
      <ImageModal
        imageUrl={
          "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        title="Imagen"
        show={showModal}
        onClose={handleClose}
        action={"create"}
      />
    </Wrapper>
  );
};

export default Filters;
