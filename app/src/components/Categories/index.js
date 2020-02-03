import React, { useState } from "react";
import Category from "./Category";
import {
  Container,
  Wrapper,
  Title,
  AddButton,
  CategoriesHeader
} from "./styled";
import CategoryModal from "../CategoryModal";
import { useSelector } from 'react-redux';

const Categories = () => {
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
          user.login ? 
          <AddButton onClick={toggleModal}>
          <i className="fas fa-plus"></i>
          </AddButton> : ""
        }
        
      </CategoriesHeader>
      <Wrapper>
        {categories ? categories.map((category, i) => {
          return (
            <Category
              key={i}
              text={category.name}
              selected={category.selected}
            />
          );
        }) : ""}
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
