import React, { useState, useEffect } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import Modal from "../../containers/Modal";
import { Wrapper, Data } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import { postProductRequest } from '../../thunks/images';

const ImageModal = ({ show, onClose, title, image, action }) => {
  
  const categories = useSelector(state => state.categoriesReducer.categories);
  const images = useSelector(state => state.imagesReducer.posts);
  const user = useSelector(state => state.userReducer.user);
  const options = categories ? categories.map(category => {category.label = category.name;category.value = category._id; return category;}) : "";
  
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("3MB");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filePreview, setFilePreview] = useState("");
  const imageIndex = images.findIndex(i => i._id === image._id);

  const dispatch = useDispatch();
  useEffect(() => {
    if(show && image) {
      setSelectedOptions(image.tags);
      setName(image.name);
    }
}, [show,image])
  const onImageLoad = event => {
    setFilePreview(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };
  const onInputChange = (event) => {
    setName(event.target.value);
  }
  const onImageSubmit = event => {
    event.preventDefault();
    const jsonTags = JSON.stringify(selectedOptions);
    let formData = new FormData();
    if(file)
    formData.append('image', file, file.name);
    formData.append('name', name);
    formData.append('tags', jsonTags);
    formData.append('userId', user.userId);
    postProductRequest(formData)(dispatch);
    onClose();
  }

  return (
    <>
      {show ? (
        <Modal large onClose={onClose} title={title}>
        { action === "view" ?
          <Wrapper>
            <img src={image ? images[imageIndex].signedWatermarkSrc : "" } alt="selected" />
            <Data onSubmit={onImageSubmit}>
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
              <select>
                <option>1024x720</option>
                <option>1920x1080</option>
              </select>
              <button type="submit">
                Download
              </button>
            </Data>
          </Wrapper>
          :
          <Wrapper>
            {image || filePreview ?
              <img src={image ? image.signedWatermarkSrc : filePreview} alt="selected" />
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
                    value={image.size}
                  />
                </>
              )}

              {action === "edit" ? (
                <select>
                  <option>1024x720</option>
                  <option>1920x1080</option>
                </select>
              ) : (
                <input id="image" name="image" type="file" className="custom-file-input" onChange={onImageLoad} />
              )}
              <button type="submit">
                {action === "edit"
                  ? "Edit"
                  : "Upload"}
              </button>
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
