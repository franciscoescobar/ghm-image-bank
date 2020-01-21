const INITIAL_STATE = {
  images: [],
  loading: false,
  error: null,
  filters: 0
};

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_IMAGES_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_IMAGES_SUCCESS": {
      const { images } = action.payload;

      return {
        ...state,
        images,
        loading: false
      };
    }

    case "FETCH_IMAGES_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    case "SORT_PRICE": {
      const newImages = state.images.sort((a, b) => {
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
        images: newImages,
        filters: 2
      };
    }
    case "SORT_POPULAR": {
      const newImages = state.images.sort((a, b) => {
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
        images: newImages,
        filters: 1
      };
    }
    case "SORT_RECENT": {
      const newImages = state.images.sort((a, b) => {
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
        images: newImages,
        filters: 0
      };
    }
    default: {
      return state;
    }
  }
};
export default imagesReducer;
