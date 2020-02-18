import React, { useState } from "react";
import Category from "../Category";
import {
  Container,
  Wrapper,
  Title,
  AddButton,
  CategoriesHeader
} from "./styled";
import CategoryModal from "../CategoryModal";
import CategoriesLoader from "../CategoriesLoader";
import { useSelector } from 'react-redux';
import { LoaderWrapper } from "../Images/styled";

const Categories = () => {
  const loading = useSelector(state => state.categoriesReducer.loading);
  const categories = useSelector(state => state.categoriesReducer.categories);
  const user = useSelector(state => state.userReducer.user);
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <Container>
      <CategoriesHeader>
        <Title>Categories</Title>
        {
          user.role === "admin" ? 
          <AddButton onClick={toggleModal}>
          <i className="fas fa-plus"></i>
          </AddButton> : ""
        }
        
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
            />
          );
        }) : ""
      }
      </Wrapper>
      <CategoryModal
        show={show}
        onClose={toggleModal}
        title={"Categories"}
        categories={categories}
      ></CategoryModal>
    </Container>
  );
};

export default Categories;
