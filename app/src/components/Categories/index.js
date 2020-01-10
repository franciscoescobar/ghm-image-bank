import React from 'react'
import styled from 'styled-components';
import Category from './Category';
const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin: 16px 20%;
  padding: 8px;
`;
const Categories = ({categories}) => (
    <Wrapper>
        {categories.map(category => {
            return <Category text={category}/>
        })}
    </Wrapper>
);

export default Categories;