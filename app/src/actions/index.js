export const fetchCategoriesRequest = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST"
  };
};

export const fetchCategoriesSuccess = categories => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: { categories }
  };
};

export const fetchCategoriesFailure = error => {
  return {
    type: "FETCH_CATEGORIES_FAILURE",
    payload: { error }
  };
};
export const postCategoryRequest = () => {
  return {
    type: "POST_CATEGORY_REQUEST"
  };
};

export const postCategorySuccess = category => {
  return {
    type: "POST_CATEGORY_SUCCESS",
    payload: { category }
  };
};

export const postCategoryFailure = error => {
  return {
    type: "POST_CATEGORY_FAILURE",
    payload: { error }
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
export const fetchPostRequest = () => {
  return {
    type: "FETCH_POST_REQUEST"
  };
};

export const fetchPostSuccess = post => {
  return {
    type: "FETCH_POST_SUCCESS",
    payload: { post }
  };
};

export const fetchPostFailure = error => {
  return {
    type: "FETCH_POST_FAILURE",
    payload: { error }
  };
};
export const postPostsRequest = () => {
  return {
    type: "POST_POSTS_REQUEST"
  };
};

export const postPostsSuccess = post => {
  return {
    type: "POST_POSTS_SUCCESS",
    payload: { post }
  };
};

export const postPostsFailure = error => {
  return {
    type: "POST_POSTS_FAILURE",
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
export const signUserRequest = () => {
  return {
    type: "SIGN_USER_REQUEST"
  };
};

export const signUserSuccess = user => {
  return {
    type: "SIGN_USER_SUCCESS",
    payload: { user }
  };
};

export const signUserFailure = error => {
  return {
    type: "SIGN_USER_FAILURE",
    payload: { error }
  };
};
export const openLogin = () => {
  return {
    type: "OPEN_LOGIN",
  }
}
export const openSignup = () => {
  return {
    type: "OPEN_SIGNUP",
  }
}
export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  }
}
export const editCategoryRequest = () => {
  return {
    type: "EDIT_CATEGORY_REQUEST"
  };
};

export const editCategorySuccess = category => {
  return {
    type: "EDIT_CATEGORY_SUCCESS",
    payload: { category }
  };
};

export const editCategoryFailure = error => {
  return {
    type: "EDIT_CATEGORY_FAILURE",
    payload: { error }
  };
};
export const deleteCategoryRequest = () => {
  return {
    type: "DELETE_CATEGORY_REQUEST"
  };
};

export const deleteCategorySuccess = category => {
  return {
    type: "DELETE_CATEGORY_SUCCESS",
    payload: { category }
  };
};

export const deleteCategoryFailure = error => {
  return {
    type: "DELETE_CATEGORY_FAILURE",
    payload: { error }
  };
};