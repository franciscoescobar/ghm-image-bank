import React, { useState } from "react";
import Modal from "../../containers/Modal";
import { Wrapper, FormWrapper } from "./styled";
import Category from "../Categories/Category";
import { useSelector, useDispatch } from 'react-redux';
import { postCategoriesRequest } from '../../thunks/categories';
import { getCategoriesRequest } from '../../thunks/categories';
const CategoryModal = ({ show, title, onClose }) => {

  const categories = useSelector(state => state.categoriesReducer.categories);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  const onInputChange = (event) => {
    setCategory(event.target.value);
  }
  const onFormSubmit = async (event) => {
    event.preventDefault();
    postCategoriesRequest(category)(dispatch);
    getCategoriesRequest()(dispatch);
  }
  return (
  <>
    {show ? (
      <Modal extralarge title={title} onClose={onClose}>
        <Wrapper>
          {categories ?categories.map((category, i) => {
            return (
              <Category
                key={i}
                text={category.name}
                selected={category.selected}
              />
            );
          }) : ""}
        </Wrapper>
        <FormWrapper onSubmit={onFormSubmit}>
          <input type="text" placeholder="Ciudades, Naturaleza..." onChange={onInputChange} value={category} />
          <button type="submit">Submit</button>
        </FormWrapper>
      </Modal>
    ) : (
      ""
    )}
  </>
)};

export default CategoryModal;
