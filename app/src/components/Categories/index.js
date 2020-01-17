import React from 'react'
import Category from './Category';
import { Container, Wrapper, Title, AddButton, CategoriesHeader } from './styled';
const Categories = ({categories}) => (
    <Container>
    <CategoriesHeader>
      <Title>Categories</Title>
      <AddButton><i class="fas fa-plus"></i></AddButton>
    </CategoriesHeader>
        <Wrapper>
            {categories.map((category, i) => {
                return <Category key={i} text={category.text} selected={category.selected}/>
            })}
        </Wrapper>
    </Container>
);

export default Categories;