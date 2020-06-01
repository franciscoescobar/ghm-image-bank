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

    case "IS_LOGGED_IN": {
      const {user} = action.payload;
      return {
        ...state,
        user: {...state.user, ...user}
      }
    }

    case "LOG_OUT": {
      localStorage.removeItem('token');
      localStorage.removeItem('expiryDate');
      localStorage.removeItem('userId');
      return {
        ...state,
        user: {
          login: false,
          token: null
        }
      }
    }

    case "GET_USER_REQUEST": {
      return {
        ...state,
        userLoading: true
      };
    }

    case "GET_USER_SUCCESS": {
      const { user } = action.payload;
      return {
        ...state,
        user: {
          ...state.user, 
          role: user 
        },
        userLoading: false
      };
    }

    case "GET_USER_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        userLoading: false
      };
    }

    case "FETCH_USER_REQUEST": {
      return {
        ...state,
        userLoading: true
      };
    }

    case "FETCH_USER_SUCCESS": {
      const { user } = action.payload;
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
      );
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      localStorage.setItem('token', user.token);
      localStorage.setItem('userId', user.userId);
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

      return {
        ...state,
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
