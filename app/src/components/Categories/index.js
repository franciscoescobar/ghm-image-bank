import React, { useState, useEffect } from "react";
import Category from "../Category";
import {
  Container,
  Wrapper,
  Title,
  CategoriesHeader,
  FormWrapper
} from "./styled";
import CategoriesLoader from "../CategoriesLoader";
import { useSelector, useDispatch } from 'react-redux';
import { LoaderWrapper } from "../Images/styled";
import { postCategoriesRequest } from '../../thunks/categories';
import { getCategoriesRequest } from '../../thunks/categories';
import { toast } from 'react-toastify';

const Categories = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.categoriesReducer.loading);
  const categories = useSelector(state => state.categoriesReducer.categories);
  const user = useSelector(state => state.userReducer.user);
  const language = useSelector(state => state.languageReducer.language);
  const [notRepeated, setNotRepeated] = useState(true);
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
    <Container>
      <CategoriesHeader>
        <Title>{language === "en-US" ? "Choose a category" : "Seleccione una categoria"}</Title>
        <FormWrapper onSubmit={onFormSubmit}>
          <input name="category" type="text" placeholder="Ciudades, Naturaleza..." onChange={onInputChange} value={category.name} />
          <button type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </FormWrapper>
      </CategoriesHeader>
      <Wrapper>
      {loading ? 
        <LoaderWrapper>
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
          <CategoriesLoader />
        </LoaderWrapper>
        :
        categories ? categories.map((category, i) => {
          return (
            <Category
              key={i}
              category={category}
              modal={user.role === "admin"}
            />
          );
        }) : ""
      }
      </Wrapper>
    </Container>
  );
};

export default Categories;
