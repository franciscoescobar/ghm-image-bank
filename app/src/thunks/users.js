import api from "../utils/api";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  signUserRequest,
  signUserSuccess,
  signUserFailure
} from "../actions";

export const getUserRequest = formData => {
  return async function(dispatch) {
    try {
      dispatch(fetchUserRequest());
      const user = await api.getUser(formData);
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
      console.log(error);
    }
  };
};

export const signUser = formData => {
  return async function(dispatch) {
    try {
      dispatch(signUserRequest());
      await api.signUser(formData);
      dispatch(signUserSuccess());
    } catch (error) {
      dispatch(signUserFailure(error.message));
    }
  };
};
