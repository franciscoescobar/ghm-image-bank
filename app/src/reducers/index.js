import { combineReducers } from "redux";
import userReducer from "./user";
import imagesReducer from "./images";
import categoriesReducer from "./categories";
import languageReducer from "./language";

const rootReducer = combineReducers({
  userReducer,
  imagesReducer,
  categoriesReducer,
  languageReducer
});
export default rootReducer;
