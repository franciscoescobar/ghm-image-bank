import React, {useState} from "react";
import { Wrapper } from "./styled";
import { deleteCategory, editCategory } from '../../../thunks/categories';
import { getProductsFilteredRequest } from '../../../thunks/images';
import { useSelector , useDispatch } from 'react-redux';

const Category = ({ category, modal }) => {

  const [updateCategory, setUpdateCategory] = useState(category.selected);
  const [categoryName, setcategoryName] = useState(category.name)

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);

  const onCategoryClick = () => {
    if(modal) {
    }
    else {
      setUpdateCategory(!updateCategory);
      category.selected = !category.selected;
      const filteredCategories = categories.filter(c => c.selected === true);
      getProductsFilteredRequest(filteredCategories)(dispatch);
    }
  };

  const onDeleteClick = () => {
    const result = window.confirm("Are you sure you want to delete?");
    if(result){
      deleteCategory(category)(dispatch);
    }
  }

  const onChange = (event) => {
    setcategoryName(event.target.value);
  }

  const onBlur = () => {
    const result = window.confirm("Are you sure you want to edit?");
    if (result) {
      editCategory(category)(dispatch);
    }
  }

  return (
    <Wrapper className={updateCategory ? "selected" : ""}>
      <input onClick={onCategoryClick} onBlur={onBlur} value={categoryName} onChange={onChange} readOnly={!modal} />
      {
        modal ?
        <i onClick={onDeleteClick} className="fas fa-trash-alt"></i> :
        ""
      }
    </Wrapper>
  );
};

export default Category;
