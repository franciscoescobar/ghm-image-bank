import React from 'react'
import Modal from '../Modal';
import { Wrapper, Data } from './styled';

const ImageModal = ({show, onClose, title, imageUrl}) => (
    <>
        { show ?
            (<Modal large onClose={onClose} title={title}>
                <Wrapper>
                    <img src={imageUrl} alt="selected-image" />
                    <Data>
                        <input name="image-name" type="text" disabled value={"gsc0020"}/>
                        <input name="image-size" type="text" disabled value={"3 MB"}/>
                        <input name="image-tags" type="text" disabled value={"Paisajes, Campo"}/>
                        <select>
                            <option>1024x720</option>
                            <option>1920x1080</option>
                        </select>
                        <button>Descargar</button>
                    </Data>
                </Wrapper>
            </Modal>)
            : ""
        }
    </>    
);

export default ImageModal;