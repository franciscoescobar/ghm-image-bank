import React from 'react'
import {Wrapper} from './styled';
const Category = ({text, selected}) => (
    <Wrapper className={selected ? "selected" : ""}>{text}</Wrapper>
);

export default Category;