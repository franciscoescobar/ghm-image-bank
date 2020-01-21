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
import { categories } from "../../data";
const Categories = ({ categories }) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <Container>
      <CategoriesHeader>
        <Title>Categories</Title>
        <AddButton onClick={toggleModal}>
          <i class="fas fa-plus"></i>
        </AddButton>
      </CategoriesHeader>
      <Wrapper>
        {categories.map((category, i) => {
          return (
            <Category
              key={i}
              text={category.text}
              selected={category.selected}
            />
          );
        })}
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
