import React, { useState, useEffect } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import { postProductRequest, editProductRequest, deleteProductRequest } from '../../thunks/images';
import { toast } from 'react-toastify';


const ImageModal = ({ show, onClose, title, image, action }) => {
  
  const categories = useSelector(state => state.categoriesReducer.categories);
  const images = useSelector(state => state.imagesReducer.posts) || [];
  const imageIndex = images.findIndex(i => i && i._id === image._id);
  const user = useSelector(state => state.userReducer.user);
  const options = categories ? categories.map(category => {category.label = category.name;category.value = category._id; return category;}) : "";
  
  const [file, setFile] = useState(image.file || []);
  const [name, setName] = useState(image.name || "");
  const [size, setSize] = useState(image.size || "");
  const [editOrDelete, setEditOrDelete] = useState("edit")
  const [selectedOptions, setSelectedOptions] = useState(image.categories || []);
  const [filePreview, setFilePreview] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if(show && image) {
      setSelectedOptions(image.categories);
      setName(image.name);
      setSize(`${image.size} MB`);
    }
}, [show,image])
  const onImageLoad = event => {
    setFile(Array.from(event.target.files));
    setFilePreview(URL.createObjectURL(event.target.files[0]));
  };
  const onInputChange = (event) => {
    setName(event.target.value);
  }
  const correctMimeType = () => {
    for(let i = 0; i < file.length; i ++){
      if (
        file[i].name.includes(".jpg", file[i].name.length - 4) ||
        file[i].name.includes(".png", file[i].name.length - 4) || 
        file[i].name.includes(".gif", file[i].name.length - 4) ||
        file[i].name.includes(".jpeg", file[i].name.length - 5) 
        ) 
      {
        return true;
      }  
    }
    return false;

  }
  const onImageSubmit = async event => {
    event.preventDefault();
    const jsonCategories = JSON.stringify(selectedOptions);
    let formData = new FormData();
    if(file.length > 0)
    for(let i = 0; i < file.length; i++) {
      formData.append('image', file[i]);
    }
    formData.append('name', name);
    formData.append('categories', jsonCategories);
    formData.append('userId', user.userId);
    if(action === "view") {
      console.log("OPEN EMAIL MODAL");
      onClose();
    }
    else if (action === "edit") {
      if(editOrDelete === "edit") {
        if(name.length <= 3) {
          toast("The name has to be at least 4 characters long");
        }
        else if (jsonCategories.length === 2) {
          toast("It has to have at least one category");
        }
        else if (file && !correctMimeType()) {
          toast("file has to be a jpg, jpeg, png or gif and have the extension");
        }
        else {
          const result = window.confirm("Are you sure you wanna edit this post?");
          if(result){
            await editProductRequest(formData, image._id, user.token)(dispatch);
            onClose();
          }
        }
      }
      else {
        const result = window.confirm("Are you sure you wanna delete this post?");
        if(result){
          deleteProductRequest(image._id, user.token)(dispatch);
          onClose();
        }
      
      }
    }
    else {
      if(name.length <= 3) {
        toast("The name has to be at least 4 characters long");
      }
      else if (jsonCategories.length === 2) {
        toast("It has to have at least one category");
      }
      else if (!file) {
        toast("You didnt upload a file");
      }
      else if (!correctMimeType()) {
        toast("file has to be a jpg, jpeg, png or gif and have the extension");
      }
      else {
        postProductRequest(formData, user.token)(dispatch);
        onClose();
      }
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
              <a href={images[imageIndex].signedWatermarkSrc} download={name} rel="noopener noreferrer" target="_blank">
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
            <Data action="/post" onSubmit={onImageSubmit}>
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
              <input multiple id="image" name="image" type="file" className="custom-file-input" onChange={onImageLoad} />
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
