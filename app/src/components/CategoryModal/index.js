import React, { useState, useEffect } from "react";
import Modal from "../../containers/Modal";
import { Wrapper, FormWrapper } from "./styled";
import Category from "../Category";
import { useSelector, useDispatch } from 'react-redux';
import { postCategoriesRequest } from '../../thunks/categories';
import { getCategoriesRequest } from '../../thunks/categories';

import { toast } from 'react-toastify';

const CategoryModal = ({ show, title, onClose }) => {
  
  const categories = useSelector(state => state.categoriesReducer.categories);
  const user = useSelector(state => state.userReducer.user);
  const [notRepeated, setNotRepeated] = useState(true);
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
    if(category.name.length > 3 && notRepeated){
      await postCategoriesRequest(category, user.token)(dispatch);
      getCategoriesRequest()(dispatch);
    }
    else if (notRepeated) {
      toast("The name is too short");
      category.name = "";
    }
    else {
      toast("The name exists");
      category.name = "";
    }
  }

  useEffect(() => {
    if(categories.filter(c => c.name.toLowerCase() === category.name.toLowerCase()).length > 0) {
      setNotRepeated(false);
    }
    else { 
      setNotRepeated(true);
    }
  }, [category,categories])

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
