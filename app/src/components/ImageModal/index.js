import React, { useState, useEffect } from "react";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";

const ImageModal = ({ show, onClose, title, image, action, onSubmit }) => {
  const [newImage, setNewImage] = useState(image || "");
  useEffect(() => {
    setNewImage(image);
  }, [image]);
  const onImageLoad = event => {
    console.log(event.target.value);
  };
  const handleSubmit = () => {};
  return (
    <>
      {show ? (
        <Modal large onClose={onClose} title={title}>
          <Wrapper>
            <img src={newImage ? newImage.src : ""} alt="selected-image" />
            <Data onSubmit={handleSubmit}>
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
              <button>
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
