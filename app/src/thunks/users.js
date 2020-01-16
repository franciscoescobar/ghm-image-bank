import api from "../utils/api";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess
} from "../actions";

export const getUserRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchUserRequest());
      const user = await api.getUser();

      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};