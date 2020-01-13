import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    flex: 1 1 300px;
    object-fit: cover;
    margin: 0.72rem;
`;
const GridImage = ({data}) => (
    <Image src={data.src} alt={data.alt} />
);

export default GridImage;