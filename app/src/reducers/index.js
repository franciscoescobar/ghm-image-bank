import { combineReducers } from "redux";
import userReducer from "./user";
import imagesReducer from "./images";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
  userReducer,
  imagesReducer,
  categoriesReducer
});
export default rootReducer;
