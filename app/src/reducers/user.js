const INITIAL_STATE = {
  user: {},
  userLoading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST": {
      return {
        ...state,
        userLoading: true
      };
    }

    case "FETCH_USER_SUCCESS": {
      const { user } = action.payload;

      return {
        ...state,
        user,
        userLoading: false
      };
    }

    case "FETCH_USER_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        userLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
export default userReducer;
