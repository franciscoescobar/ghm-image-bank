import api from "../utils/api";
import {
  fetchImagesFailure,
  fetchImagesRequest,
  fetchImagesSuccess
} from "../actions";

export const getProductsRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchImagesRequest());
      const images = await api.getImages();

      dispatch(fetchImagesSuccess(images));
    } catch (error) {
      dispatch(fetchImagesFailure(error.message));
    }
  };
};
