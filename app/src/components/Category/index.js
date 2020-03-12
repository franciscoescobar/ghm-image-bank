import React, {useState, useEffect} from "react";
import { Wrapper } from "./styled";
import { deleteCategory, editCategory, getCategoriesRequest } from "../../thunks/categories";
import { getProductsFilteredRequest } from "../../thunks/images";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Category = ({ category, modal }) => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const user = useSelector(state => state.userReducer.user);
  const [categoryName, setCategoryName] = useState(category.name);
  const [originalName] = useState(category.name);
  const [categorySelected, setCategorySelected] = useState(category.selected);
  const [notRepeated, setNotRepeated] = useState(true);
  const onCategoryClick = () => {
    if (!modal) {
      setCategorySelected(!categorySelected);
      category.selected = !category.selected;
      const filteredCategories = categories.filter(c => c.selected === true);
      getProductsFilteredRequest(filteredCategories, 1)(dispatch);
    }
  };

  const onDeleteClick = async () => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteCategory(category, user.token)(dispatch);
      getCategoriesRequest()(dispatch);
    }
  };

  const onChange = event => {
    setCategoryName(event.target.value);
  };

  const onBlur = async () => {
    if (modal) {
      category.name = categoryName;
      if(categoryName.length <= 3) {
        toast("The name is too short")
        setCategoryName(originalName);
        category.name = originalName;
      }
      else if(!notRepeated) {
        toast("That tag name already exists");
        setCategoryName(originalName);
        category.name = originalName;
      }
      else {
        const result = window.confirm("Are you sure you want to edit?");
        if (result) {
          await editCategory(category, user.token)(dispatch);
          getCategoriesRequest()(dispatch);
        }
      }
    }
  };

  useEffect(() => {
    setCategoryName(category.name);
  }, [category])

  useEffect(() => {
    if(categories.filter(c => c.name.toLowerCase() === categoryName.toLowerCase()).length > 0) {
      setNotRepeated(false);
    }
    else { 
      setNotRepeated(true);
    }
  }, [categoryName,categories]);

  return (
    <Wrapper className={categorySelected ? "selected" : ""}>
      <input
        aria-label={categoryName}
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
