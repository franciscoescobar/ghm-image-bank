export const sortPopular = () => {
  return {
    type: "SORT_POPULAR"
  };
};
export const sortPrice = () => {
  return {
    type: "SORT_PRICE"
  };
};
export const sortRecent = () => {
  return {
    type: "SORT_RECENT"
  };
};
export const fetchImagesRequest = () => {
  return {
    type: "FETCH_IMAGES_REQUEST"
  };
};

export const fetchImagesSuccess = images => {
  return {
    type: "FETCH_IMAGES_SUCCESS",
    payload: { images }
  };
};

export const fetchImagesFailure = error => {
  return {
    type: "FETCH_IMAGES_FAILURE",
    payload: { error }
  };
};
export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST"
  };
};

export const fetchUserSuccess = user => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: { user }
  };
};

export const fetchUserFailure = error => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: { error }
  };
};