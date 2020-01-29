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
export const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST"
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: { posts }
  };
};

export const fetchPostsFailure = error => {
  return {
    type: "FETCH_POSTS_FAILURE",
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