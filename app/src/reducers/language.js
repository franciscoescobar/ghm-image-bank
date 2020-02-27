const INITIAL_STATE = {
    language: window.navigator.language
};
  
const languageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "SWITCH_LANGUAGE": {
        const { language } = action.payload;
            return {
                ...state,
                language
            };
        }

        default: {
            return state;
        }
    }
};
export default languageReducer;
  