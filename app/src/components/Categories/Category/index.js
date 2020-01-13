import React, {useState} from 'react'
import {Wrapper} from './styled';
const Category = ({text, selected}) => {
    const [categorySelected, setCategorySelected] = useState(selected)
    const toggleClass = () => {
        setCategorySelected(!categorySelected);
    }
    return (
        <Wrapper onClick={toggleClass} className={categorySelected ? "selected" : ""}>{text}</Wrapper>
    );
};

export default Category;