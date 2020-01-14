import React from 'react';
import ColumnImage from '../ColumnImage';
import { Wrapper } from './styled';
const Column = ({images, handleImageClick}) => (
    <Wrapper>
        {images.map((image, i) => {
            return <ColumnImage onImageClick={handleImageClick} key={i} data={image}/>
        })}
    </Wrapper>
);

export default Column;