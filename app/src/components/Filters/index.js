import React, { useState, useEffect } from "react";
import { Wrapper, AddButton } from "./styled";
import ImageModal from "../ImageModal";
import { useSelector } from 'react-redux';

const Filters = () => {
  const user = useSelector(state => state.userReducer.user);
  const language = useSelector(state => state.languageReducer.language);

  const [showModal, setShowModal] = useState(false);
  const [filters] = useState([
    { selected: true, text: language === "en-US" ? "Most Recent" : "Más recientes" },
    { selected: false, text: language === "en-US" ? "Most Popular" : "Más populares" }
  ]);
  const [updatedFilters, setUpdatedFilters] = useState(filters);

  useEffect(() => {
    setUpdatedFilters(
      filters.map((filter, i) => {
        if (i === 0)
        filter.text = language === "en-US" ? "Most Recent" : "Más recientes";
        if (i === 1)
        filter.text = language === "en-US" ? "Most Popular" : "Más populares";
        return filter;
      })
    );
  }, [language, filters])
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
      <p>{language === "en-US" ? "Most recent" : "Lo último"}</p>

      {
        user.role === "admin" ? 
        <AddButton onClick={onImageClick}>
          <i className="fas fa-plus"></i>
        </AddButton> : ""
      }
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
