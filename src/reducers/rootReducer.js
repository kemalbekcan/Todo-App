import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: userReducer,
  todos: todoReducer,
});

export default rootReducer;
