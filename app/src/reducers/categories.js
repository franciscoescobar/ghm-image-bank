const INITIAL_STATE = {
    categories: [],
    loading: false,
    error: null,
  };
  
  const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "FETCH_CATEGORIES_REQUEST": {
        return {
          ...state,
          loading: true
        };
      }
  
      case "FETCH_CATEGORIES_SUCCESS": {
        const { categories } = action.payload;
        return {
          ...state,
          categories,
          loading: false
        };
      }
  
      case "FETCH_CATEGORIES_FAILURE": {
        const { error } = action.payload;
  
        return {
          ...state,
          error,
          loading: false
        };
      }
  
      case "POST_CATEGORY_REQUEST": {
        return {
          ...state,
          loading: true
        };
      }
  
      case "POST_CATEGORY_SUCCESS": {
        const { category } = action.payload;
        const newCategories =  [category ,...state.categories];
        return {
            ...state,
            posts: newCategories,
            loading: false
          };
      }
  
      case "POST_CATEGORY_FAILURE": {
        const { error } = action.payload;
  
        return {
          ...state,
          error,
          loading: false
        };
      }

      case "EDIT_CATEGORY_REQUEST": {
        return {
          ...state,
          loading: true
        };
      }
  
      case "EDIT_CATEGORY_SUCCESS": {
        const { category } = action.payload;
        const categoryIndex = state.categories.findIndex(c => c._id === category._id);
        const newCategories = [
          ...state.categories.slice(0, categoryIndex),
          category,
          ...state.categories.slice(categoryIndex + 1 , state.categories.length)
        ];
        return {
          ...state,
          categories: newCategories,
          loading: false
        };
      }
  
      case "EDIT_CATEGORY_FAILURE": {
        const { error } = action.payload;
  
        return {
          ...state,
          error,
          loading: false
        };
      }
      case "DELETE_CATEGORY_REQUEST": {
        return {
          ...state,
          loading: true
        };
      }
  
      case "DELETE_CATEGORY_SUCCESS": {
        const { category } = action.payload;
        const newCategories =  [category ,...state.categories];
        return {
            ...state,
            posts: newCategories,
            loading: false
          };
      }
  
      case "DELETE_CATEGORY_FAILURE": {
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
}
      
export default categoriesReducer;