import api from "../utils/api";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  postPostsFailure,
  postPostsRequest,
  postPostsSuccess
} from "../actions";

export const getProductsRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchPostsRequest());
      const posts = await api.getPosts();

      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
export const postProductRequest = (formData) => {
  return async function(dispatch) {
    try {
      dispatch(postPostsRequest());
      const post = await api.postPost(formData);
      dispatch(postPostsSuccess(post));
    } catch (error) {
      dispatch(postPostsFailure(error.message));
    }
  };
};