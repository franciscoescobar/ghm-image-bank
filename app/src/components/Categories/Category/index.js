import React, {useState} from "react";
import { Wrapper } from "./styled";
import { updateCategories } from '../../../thunks/categories';
import { getProductsFilteredRequest } from '../../../thunks/images';
import { useSelector , useDispatch } from 'react-redux';
const Category = ({ category, modal }) => {
  const [updateCategory, setUpdateCategory] = useState(category.selected);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const onCategoryClick = () => {
    if(modal) {
      updateCategories(category)(dispatch);
    }
    else {
      setUpdateCategory(!updateCategory);
      category.selected = !category.selected;
      const filteredCategories = categories.filter(c => c.selected === true);
      getProductsFilteredRequest(filteredCategories)(dispatch);
    }
  };
  return (
    <Wrapper
      onClick={onCategoryClick}
      className={updateCategory ? "selected" : ""}
    >
      {category.name}
    </Wrapper>
  );
};

export default Category;
