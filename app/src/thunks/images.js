import api from "../utils/api";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess
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
