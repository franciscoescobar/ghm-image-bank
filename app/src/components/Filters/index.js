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
        <i className="fas fa-plus"></i>
      </AddButton>
      <ImageModal
        title="Imagen"
        show={showModal}
        onClose={handleClose}
        action={"create"}
        image={""}
      />
    </Wrapper>
  );
};

export default Filters;
