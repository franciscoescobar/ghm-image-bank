const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
  filters: 0
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_POSTS_SUCCESS": {
      const { posts } = action.payload;
      return {
        ...state,
        posts,
        loading: false
      };
    }

    case "FETCH_POSTS_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    case "POST_POSTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "POST_POSTS_SUCCESS": {
      const { post } = action.payload;
      const newPosts =  [post ,...state.posts];

      return {
        ...state,
        posts: newPosts,
        loading: false
      };
    }

    case "POST_POSTS_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
};
export default postsReducer;
