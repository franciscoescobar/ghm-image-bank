import React, {useState, useEffect} from "react";
import { Wrapper } from "./styled";
import { deleteCategory, editCategory, getCategoriesRequest } from "../../../thunks/categories";
import { getProductsFilteredRequest } from "../../../thunks/images";
import { useSelector, useDispatch } from "react-redux";

const Category = ({ category, modal }) => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const [categoryName, setCategoryName] = useState(category.name);
  const [categorySelected, setCategorySelected] = useState(category.selected);
  const onCategoryClick = () => {
    if (!modal) {
      setCategorySelected(!categorySelected);
      category.selected = !category.selected;
      const filteredCategories = categories.filter(c => c.selected === true);
      getProductsFilteredRequest(filteredCategories)(dispatch);
    }
  };

  const onDeleteClick = () => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteCategory(category)(dispatch);
      getCategoriesRequest()(dispatch);
    }
  };

  const onChange = event => {
    setCategoryName(event.target.value);
  };

  const onBlur = () => {
    if (modal) {
      const result = window.confirm("Are you sure you want to edit?");
      category.name = categoryName;
      console.log(category);
      if (result) {
        editCategory(category)(dispatch);
        getCategoriesRequest()(dispatch);
      }
    }
  };

  useEffect(() => {
    setCategoryName(category.name);
  }, [category])

  return (
    <Wrapper className={categorySelected ? "selected" : ""}>
      <input
        onClick={onCategoryClick}
        onBlur={onBlur}
        value={categoryName}
        onChange={onChange}
        readOnly={!modal}
      />
      {modal ? (
        <i onClick={onDeleteClick} className="fas fa-trash-alt"></i>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Category;
