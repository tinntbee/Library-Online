import { all } from "redux-saga/effects";
import bookSaga from "./bookSaga";
import tagSaga from "./tagSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([userSaga(), bookSaga(), tagSaga()]);
}
