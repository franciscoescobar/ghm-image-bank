import api from "../utils/api";
import {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    postCategoryRequest,
    postCategorySuccess,
    postCategoryFailure,
    deleteCategoryRequest,
    deleteCategorySuccess,
    deleteCategoryFailure,
    editCategoryRequest,
    editCategorySuccess,
    editCategoryFailure
} from "../actions";

export const getCategoriesRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchCategoriesRequest());
      const categories = await api.getCategories();

      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
};
export const postCategoriesRequest = (formData) => {
  return async function(dispatch) {
    try {
      dispatch(postCategoryRequest());
      const category = await api.postCategory(formData);
      dispatch(postCategorySuccess(category));
    } catch (error) {
      dispatch(postCategoryFailure(error.message));
    }
  };
};
export const deleteCategory = () => {
  return async function(dispatch) {
    try {
      dispatch(deleteCategoryRequest());
      const category = await api.deleteCategory();
      dispatch(deleteCategorySuccess(category));
    } catch (error) {
      dispatch(deleteCategoryFailure(error.message));
    }
  };
}
export const editCategory = category => {
  console.log(category);

  return async function(dispatch) {
    try {
      dispatch(editCategoryRequest());
      const editedCategory = await api.editCategory(category);
      console.log(editedCategory);
      dispatch(editCategorySuccess(editedCategory));
    } catch (error) {
      dispatch(editCategoryFailure(error.message));
    }
  };
}