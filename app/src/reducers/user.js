const INITIAL_STATE = {
  user: {
    login: false
  },
  modal: {
    show: false,
    login: true
  },
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
        modal: {
          ...state.modal,
          show: false,
        },
        userLoading: false
      };
    }

    case "FETCH_USER_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        modal: {
          ...state.modal,
          show: false,
        },
        userLoading: false
      };
    }

    case "SIGN_USER_REQUEST": {
      return {
        ...state,
        userLoading: true
      };
    }

    case "SIGN_USER_SUCCESS": {
      const { user } = action.payload;

      return {
        ...state,
        user,
        modal: {
          ...state.modal,
          show: false,
        },
        userLoading: false
      };
    }

    case "SIGN_USER_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        modal: {
          ...state.modal,
          show: false,
        },
        userLoading: false
      };
    }
    case "OPEN_LOGIN" : {
      return {
        ...state,
        modal: {
          show: true,
          login: true
        },
      };
    }
    case "OPEN_SIGNUP" : {
      return {
        ...state,
        modal: {
          show: true,
          login: false
        },
      };
    }
    case "CLOSE_MODAL" : {
      return {
        ...state,
        modal: {
          ...state.modal,
          show: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
export default userReducer;
