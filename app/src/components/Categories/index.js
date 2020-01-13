import React from 'react'
import Category from './Category';
import { Wrapper, Title } from './styled';
const Categories = ({categories}) => (
    <>
      <Title>Categories</Title>
        <Wrapper>
            {categories.map((category, i) => {
                return <Category key={i} text={category.text} selected={category.selected}/>
            })}
        </Wrapper>
    </>
);

export default Categories;