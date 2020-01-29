import React, { useState, useEffect } from "react";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";
import { useDispatch } from 'react-redux';
import { postProductRequest } from '../../thunks/images';
const ImageModal = ({ show, onClose, title, image, action }) => {
  const [newImage, setNewImage] = useState(image || "");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const formData = new FormData();
  useEffect(() => {
    setNewImage(image);
  }, [image]);
  const onImageLoad = event => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  const onImageSubmit = event => {
    event.preventDefault();
    formData.append('name', newImage.name || "");
    formData.append('tags', newImage.tags || [""]);
    formData.append('image', newImage.file || "");
    postProductRequest(formData)(dispatch);
    onClose();
  }
  return (
    <>
      {show ? (
        <Modal large onClose={onClose} title={title}>
          <Wrapper>
            <img src={newImage ? newImage.src : file} alt="selected-image" />
            <Data onSubmit={onImageSubmit} >
              {newImage === "" ? (
                ""
              ) : (
                <>
                  <input
                    name="image-name"
                    type="text"
                    disabled={action === "view"}
                    value={newImage.name}
                  />
                  <input
                    name="image-size"
                    type="text"
                    disabled={action === "view"}
                    value={newImage.size}
                  />
                  <input
                    name="image-tags"
                    type="text"
                    disabled={action === "view"}
                    value={newImage.tags}
                  />
                </>
              )}

              {action === "view" || action === "edit" ? (
                <select>
                  <option>1024x720</option>
                  <option>1920x1080</option>
                </select>
              ) : (
                <input name="file" type="file" onChange={onImageLoad} />
              )}
              <button type="submit">
                {action === "view"
                  ? "Download"
                  : action === "edit"
                  ? "Edit"
                  : "Upload"}
              </button>
            </Data>
          </Wrapper>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageModal;
