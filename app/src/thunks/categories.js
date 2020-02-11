import api from "../utils/api";
import {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    postCategoryRequest,
    postCategorySuccess,
    postCategoryFailure
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
export const updateCategories = () => {
  
}