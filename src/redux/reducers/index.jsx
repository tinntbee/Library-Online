import { combineReducers } from "redux";
import bookStore from "./bookStore";
import snackBar from "./snackBar";
import user from "./user";

const rootReducer = combineReducers({
  user: user,
  bookStore: bookStore,
  snackBar: snackBar,
});

export default rootReducer;
