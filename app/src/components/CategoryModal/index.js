import React, { useState } from "react";
import Modal from "../../containers/Modal";
import { Wrapper, FormWrapper } from "./styled";
import Category from "../Category";
import { useSelector, useDispatch } from 'react-redux';
import { postCategoriesRequest } from '../../thunks/categories';
import { getCategoriesRequest } from '../../thunks/categories';
const CategoryModal = ({ show, title, onClose }) => {
  
  const categories = useSelector(state => state.categoriesReducer.categories);
  const dispatch = useDispatch();
  
  const [category, setCategory] = useState({
    name: "",
    selected: false
  });
  const onInputChange = (event) => {
    setCategory({...category, name: event.target.value});
  }
  const onFormSubmit = async (event) => {
    event.preventDefault();
    if(category.name.length > 3){
      await postCategoriesRequest(category)(dispatch);
      getCategoriesRequest()(dispatch);
    }
  }
  return (
  <>
    {show ? (
      <Modal extralarge title={title} onClose={onClose}>
        <Wrapper>
          {categories ? categories.map((c, i) => {
            return (
              <Category
                category={c}
                modal={true}
                key={i}
              />
            );
          }) : ""}
        </Wrapper>
        <FormWrapper onSubmit={onFormSubmit}>
          <input name="category" type="text" placeholder="Ciudades, Naturaleza..." onChange={onInputChange} value={category.name} />
          <button type="submit">Submit</button>
        </FormWrapper>
      </Modal>
    ) : (
      ""
    )}
  </>
)};

export default CategoryModal;
