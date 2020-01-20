import React from 'react'
import Modal from '../../containers/Modal';
import { Wrapper, Data } from './styled';

const ImageModal = ({show, onClose, title, imageUrl, action}) => (
    <>
        { show ?
            (<Modal large onClose={onClose} title={title}>
                <Wrapper>
                    <img src={imageUrl} alt="selected-image" />
                    <Data>
                        <input name="image-name" type="text" disabled={action === "view"} value={action === "view" || action === "edit" ? "gsc0020" : ""}/>
                        <input name="image-size" type="text" disabled={action === "view"} value={action === "view" || action === "edit" ? "3 MB" : ""}/>
                        <input name="image-tags" type="text" disabled={action === "view"} value={action === "view" || action === "edit" ? "Cities, Argentina" : ""}/>
                        {action === "view" || action === "edit" ?
                            <select>
                                <option>1024x720</option>
                                <option>1920x1080</option>
                            </select>
                            : 
                            <input name="file" type="file" />
                        }
                        <button>{action === "view" ? "Download" : action === "edit" ? "Edit" : "Upload"}</button>
                    </Data>
                </Wrapper>
            </Modal>)
            : ""
        }
    </>    
);

export default ImageModal;