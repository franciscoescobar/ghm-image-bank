import api from "../utils/api";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostFailure,
  fetchPostRequest,
  fetchPostSuccess,
  postPostsFailure,
  postPostsRequest,
  postPostsSuccess,
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
export const getProductRequest = (postId) => {
  return async function(dispatch) {
    try {
      dispatch(fetchPostRequest());
      const post = await api.getPost(postId);
      dispatch(fetchPostSuccess(post));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
}
export const getProductsFilteredRequest = (formData) => {
  return async function(dispatch) {
    try {
      dispatch(fetchPostsRequest());
      const posts = await api.getFilteredPosts(formData);

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