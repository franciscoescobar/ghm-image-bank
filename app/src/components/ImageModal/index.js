import React, { useState, useEffect } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";
import { useDispatch } from 'react-redux';
import { postProductRequest } from '../../thunks/images';

const ImageModal = ({ show, onClose, title, image, action }) => {

  const [newImage, setNewImage] = useState(image || "");
  const [file, setFile] = useState("");
  const [options, setOptions] = useState([{label:"Algo", value: 1} ,{label:"Algo", value: 2}, {label:"Algo", value: 3}]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setNewImage(image);
  }, [image]);

  const onImageLoad = event => {
    setFilePreview(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const onImageSubmit = event => {
    event.preventDefault();
    let formData = new FormData();
    console.log(selectedOptions);
    formData.append('image', file, file.name);
    formData.append('name', newImage.name);
    formData.append('tags', selectedOptions);
    postProductRequest(formData)(dispatch);
    onClose();
  }

  return (
    <>
      {show ? (
        <Modal large onClose={onClose} title={title}>
          <Wrapper>
            {newImage || filePreview ?
              <img src={newImage ? newImage.src : filePreview} alt="selected-image" />
            :
            "" 
            }
            <Data onSubmit={onImageSubmit}>
              <input
                placeholder="sanjuan"
                name="image-name"
                type="text"
                disabled={action === "view"}
                value={newImage.name}
              />
              <MultiSelect
                overrideStrings={{
                  selectSomeItems: "Selecciona las categorias...",
                  allItemsAreSelected: "Todas las categorias seleccionadas",
                  selectAll: "Seleccionar todas",
                  search: "Buscar",
                }}
                options={options}
                selected={selectedOptions}
                onSelectedChanged={selected => setSelectedOptions(selected)}
              />
              {newImage === "" ? (
                ""
              ) : (
                <>
                  <input
                    name="image-size"
                    type="text"
                    disabled={action === "view"}
                    value={newImage.size}
                  />
                </>
              )}

              {action === "view" || action === "edit" ? (
                <select>
                  <option>1024x720</option>
                  <option>1920x1080</option>
                </select>
              ) : (
                <input id="image" name="image" type="file" className="custom-file-input" onChange={onImageLoad} />
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
