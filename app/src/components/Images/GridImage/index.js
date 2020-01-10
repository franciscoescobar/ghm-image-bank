import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
    width:calc(100%/6);
    object-fit: cover;
`;
const GridImage = ({data}) => (
    <Image src={data.src} />
);

export default GridImage;