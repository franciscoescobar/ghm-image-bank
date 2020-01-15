import React, {useEffect, useState} from 'react';
import Image from './Image';
import ImageModal from '../ImageModal';
import {Container} from './styled';
const Images = ({images}) => {

    const [showModal, setShowModal] = useState(false);

    const onImageClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    return(
    <Container>
        {
            images.map((image, i) => {
                return <Image handleImageClick={onImageClick} key={i} images={image}/>
            })
        }
        <ImageModal imageUrl={"https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} title="Imagen" show={showModal} onClose={handleClose}/>
    </Container>
)};

export default Images;