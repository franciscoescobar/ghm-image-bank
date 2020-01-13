import React from 'react'
import Category from './Category';
import { Wrapper } from './styled';
const Categories = ({categories}) => (
    <Wrapper>
        {categories.map(category => {
            return <Category text={category.text} selected={category.selected}/>
        })}
    </Wrapper>
);

export default Categories;