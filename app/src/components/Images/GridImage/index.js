import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    flex: 1 1 300px;
    object-fit: cover;
`;
const GridImage = ({data}) => (
    <Image src={data.src} />
);

export default GridImage;