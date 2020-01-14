import React from 'react';
import {Image} from './styled';
const ColumnImage = ({data, onImageClick}) => (
    <Image onClick={onImageClick} loading="lazy" src={data.src} alt={data.alt} />
);

export default ColumnImage;