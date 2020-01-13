import React from 'react';
import GridImage from './GridImage/index';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 10%;
`;
const Images = ({images}) => (
    <Wrapper>
        {images.map((image, i) => {
            return <GridImage key={i} data={image}/>
        })}
    </Wrapper>
);

export default Images;