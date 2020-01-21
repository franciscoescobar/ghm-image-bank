import { combineReducers } from "redux";
import userReducer from "./user";
import imagesReducer from "./images";

const rootReducer = combineReducers({
  userReducer,
  imagesReducer
});
export default rootReducer;
