import React from "react";
import Modal from "../../containers/Modal";

const EmailModal = ({ show, image }) => {
    const title = "Send Email";
    
    return (
        <>
        {show ? (
            <Modal large onClose={onClose} title={title}>
            
            </Modal>
        ) : (
            ""
        )}
        </>
    );
};

export default ImageModal;
