const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
  filters: 0,
  totalItems: 0,
  page: 1
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case "NEXT_PAGE" : {
      const { page } = action.payload;

      return {
        ...state,
        page: page
      }
    }

    case "FETCH_POSTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_POSTS_SUCCESS": {
      const { posts } = action.payload;
      let newPosts;
      if(Number(posts.page) === 1 || posts.page === undefined){
        newPosts = posts.posts;
      }
      else {
        newPosts = [...state.posts, ...posts.posts]
      }
      return {
        ...state,
        posts: newPosts,
        loading: false,
        totalItems: posts.totalItems,
        page: posts.page
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

    case "FETCH_POST_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_POST_SUCCESS": {
      const { post } = action.payload;
      const postIndex = state.posts.findIndex(p => p._id === post._id);
      const newPosts = [
        ...state.posts.slice(0, postIndex),
        post,
        ...state.posts.slice(postIndex + 1 , state.posts.length)
      ];
      return {
        ...state,
        posts: newPosts,
        loading: false
      };
    }

    case "FETCH_POST_FAILURE": {
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
      const newPosts =  [...post , ...state.posts];

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

    case "EDIT_POST_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "EDIT_POST_SUCCESS": {
      const { post } = action.payload;
      const postIndex = state.posts.findIndex(p => p._id === post._id);
      const newPosts = [
        ...state.posts.slice(0, postIndex),
        post,
        ...state.posts.slice(postIndex + 1 , state.posts.length)
      ];

      return {
        ...state,
        posts: newPosts,
        loading: false
      };
    }

    case "EDIT_POST_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }
    case "DELETE_POST_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "DELETE_POST_SUCCESS": {
      const { id } = action.payload;
      const postIndex = state.posts.findIndex(p => p._id === id);
      const newPosts = [
        ...state.posts.slice(0, postIndex),
        ...state.posts.slice(postIndex + 1 , state.posts.length)
      ];

      return {
        ...state,
        posts: newPosts,
        loading: false
      };
    }

    case "DELETE_POST_FAILURE": {
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
