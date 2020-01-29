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
      console.log(posts);
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

    case "SORT_PRICE": {
      const newPosts = state.posts.sort((a, b) => {
        if (a.cost < b.cost) {
          return 1;
        }
        if (a.cost > b.cost) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        posts: newPosts,
        filters: 2
      };
    }
    case "SORT_POPULAR": {
      const newPosts = state.posts.sort((a, b) => {
        if (a.cost > b.cost) {
          return 1;
        }
        if (a.cost < b.cost) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        posts: newPosts,
        filters: 1
      };
    }
    case "SORT_RECENT": {
      const newPosts = state.posts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        posts: newPosts,
        filters: 0
      };
    }
    default: {
      return state;
    }
  }
};
export default postsReducer;
