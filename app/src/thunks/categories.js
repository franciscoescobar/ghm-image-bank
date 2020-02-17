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
export const deleteCategory = category => {
  return async function(dispatch) {
    try {
      dispatch(deleteCategoryRequest());
      const deletedCategory = await api.deleteCategory(category);
      dispatch(deleteCategorySuccess(deletedCategory));
    } catch (error) {
      dispatch(deleteCategoryFailure(error.message));
    }
  };
}
export const editCategory = category => {

  return async function(dispatch) {
    try {
      dispatch(editCategoryRequest());
      await api.editCategory(category);
      dispatch(editCategorySuccess(category));
    } catch (error) {
      dispatch(editCategoryFailure(error.message));
    }
  };
}