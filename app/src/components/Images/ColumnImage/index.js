import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    width: 100%;
    object-fit: contain;
    margin-bottom: 1.45rem;
`;
const GridImage = ({data}) => (
    <Image loading="lazy" src={data.src} alt={data.alt} />
);

export default GridImage;