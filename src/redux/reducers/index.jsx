import { combineReducers } from "redux";
import backdropLoading from "./backdropLoading";
import bookDetail from "./bookDetail";
import bookStore from "./bookStore";
import notes from "./note";
import snackBar from "./snackBar";
import user from "./user";

const rootReducer = combineReducers({
  user: user,
  bookStore: bookStore,
  snackBar: snackBar,
  bookDetail: bookDetail,
  backdropLoading: backdropLoading,
  notes: notes,
});

export default rootReducer;
