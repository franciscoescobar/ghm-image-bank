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
  editPostFailure,
  editPostRequest,
  editPostSuccess
} from "../actions";

export const getProductsRequest = (page) => {
  return async function(dispatch) {
    try {
      dispatch(fetchPostsRequest());
      const posts = await api.getPosts(page);
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
export const getProductsFilteredRequest = (formData, page) => {
  return async function(dispatch) {
    try {
      dispatch(fetchPostsRequest());
      const posts = await api.getFilteredPosts(formData, page);
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

export const editProductRequest = (formData, id) => {
  return async function(dispatch) {
    try {
      dispatch(editPostRequest());
      const post = await api.editPost(formData, id);
      dispatch(editPostSuccess(post));
    } catch (error) {
      dispatch(editPostFailure(error.message));
    }
  };
}