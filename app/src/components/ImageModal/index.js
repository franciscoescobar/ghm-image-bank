import React, { useState, useEffect } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import { postProductRequest, editProductRequest, deleteProductRequest } from '../../thunks/images';

const ImageModal = ({ show, onClose, title, image, action }) => {
  
  const categories = useSelector(state => state.categoriesReducer.categories);
  const images = useSelector(state => state.imagesReducer.posts);
  const imageIndex = images.findIndex(i => i && i._id === image._id);
  const user = useSelector(state => state.userReducer.user);
  const options = categories ? categories.map(category => {category.label = category.name;category.value = category._id; return category;}) : "";
  
  const [file, setFile] = useState(image.file || "");
  const [name, setName] = useState(image.name || "");
  const [size, setSize] = useState(image.size || "");
  const [editOrDelete, setEditOrDelete] = useState("edit")
  const [selectedOptions, setSelectedOptions] = useState(image.tags || []);
  const [filePreview, setFilePreview] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if(show && image) {
      setSelectedOptions(image.tags);
      setName(image.name);
      setSize(`${image.size} MB`);
    }
}, [show,image])
  const onImageLoad = event => {
    setFilePreview(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };
  const onInputChange = (event) => {
    setName(event.target.value);
  }
  const onImageSubmit = async event => {
    event.preventDefault();
    const jsonTags = JSON.stringify(selectedOptions);
    let formData = new FormData();
    if(file)
    formData.append('image', file, file.name);
    formData.append('name', name);
    formData.append('tags', jsonTags);
    formData.append('userId', user.userId);
    if(action === "view") {
      console.log("OPEN EMAIL MODAL");
      onClose();
    }
    else if (action === "edit") {
      if(editOrDelete === "edit") {
        const result = window.confirm("Are you sure you wanna edit this post?");
        if(result){
          await editProductRequest(formData, image._id)(dispatch);
          onClose();
        }
      }
      else {
        const result = window.confirm("Are you sure you wanna delete this post?");
        if(result){
          deleteProductRequest(image._id)(dispatch);
          onClose();
        }
      }
    }
    else {
      postProductRequest(formData)(dispatch);
      onClose();
    }
  }
  
  return (
    <>
      {show ? (
        <Modal large onClose={onClose} title={title}>
        { action === "view" ?
          <Wrapper>
            <img src={image ? images[imageIndex].signedWatermarkSrc : "" } alt="selected" />
            <Data onSubmit={onImageSubmit} action={images[imageIndex].signedWatermarkSrc}>
              <input
                placeholder="sanjuan"
                name="image-name"
                type="text"
                disabled
                value={name}
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
                disabled
              />
              <input
                name="image-size"
                type="text"
                disabled
                value={size}
              />
              <a href={images[imageIndex].signedWatermarkSrc} download={name} target="_blank">
                Download
              </a>
            </Data>
          </Wrapper>
          :
          <Wrapper>
            {image || filePreview ?
              <img src={filePreview ? filePreview : images[imageIndex].signedSrc} alt="selected" />
            :
            "" 
            }
            <Data onSubmit={onImageSubmit}>
              <input
                placeholder="sanjuan"
                name="image-name"
                type="text"
                onChange={onInputChange}
                value={name}
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
              {!image ? (
                ""
              ) : (
                <>
                  <input
                    name="image-size"
                    type="text"
                    value={size}
                    disabled
                  />
                </>
              )}
              <input id="image" name="image" type="file" className="custom-file-input" onChange={onImageLoad} />
              <button onClick={() => setEditOrDelete("edit")} name="submit" type="submit">
                {action === "edit"
                  ? "Edit"
                  : "Upload"}
              </button>
              {action === "edit"
                  ? 
                <button onClick={() => setEditOrDelete("delete")} name="delete" className="delete" type="submit">
                  Delete
                </button>
                  : ""}
            </Data>
          </Wrapper>
        }
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageModal;
