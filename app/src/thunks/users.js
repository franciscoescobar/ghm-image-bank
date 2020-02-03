import api from "../utils/api";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  signUserRequest,
  signUserSuccess,
  signUserFailure
} from "../actions";

export const getUserRequest = (formData) => {
  return async function(dispatch) {
    try {
      dispatch(fetchUserRequest());
      const user = await api.getUser(formData);
      console.log(user);
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};


export const signUser = (formData) => {
  return async function(dispatch) {
    try {
      dispatch(signUserRequest());
      const user = await api.signUser(formData);
      console.log(user);
      dispatch(signUserSuccess(user));
    } catch (error) {
      dispatch(signUserFailure(error.message));
    }
  };
};