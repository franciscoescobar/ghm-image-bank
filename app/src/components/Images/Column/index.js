import React from 'react';
import GridImage from '../ColumnImage';
import { Wrapper } from './styled';
const Column = ({images}) => (
    <Wrapper>
        {images.map((image, i) => {
            return <GridImage key={i} data={image}/>
        })}
    </Wrapper>
);

export default Column;