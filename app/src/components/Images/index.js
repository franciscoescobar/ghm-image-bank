import React, {useEffect, useState} from 'react';
import Column from './Column';
import ImageModal from '../ImageModal';
import {Container} from './styled';
const Images = ({images}) => {
    const [columns, setColumns] = useState([images])
    const [width, setWidth] = React.useState(window.innerWidth);
    const [showModal, setShowModal] = useState(false);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    const onImageClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    })

    useEffect(() => {
        if(document.body.clientWidth < 620) {
            setColumns([images]);
        }
        else if(document.body.clientWidth < 1075) {
            const firstpart = images.slice(0,images.length/2);
            const secondpart = images.slice(images.length/2,images.length);
            setColumns([firstpart, secondpart]);
        }
        else {
            const firstpart = images.slice(0,images.length/3);
            const secondpart = images.slice(images.length/3, images.length/(3/2));
            const thirdpart = images.slice(images.length/(3/2), images.length);
            setColumns([firstpart, secondpart, thirdpart]);
        }
    }, [width, images]);

    return(
    <Container>
        {
            columns.map((column, i) => {
                return <Column handleImageClick={onImageClick} key={i} images={column}/>
            })
        }
        <ImageModal imageUrl={"https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} title="Imagen" show={showModal} onClose={handleClose}/>
    </Container>
)};

export default Images;