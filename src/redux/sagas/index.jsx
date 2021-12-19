import { all } from "redux-saga/effects";
import bookSaga from "./bookSaga";
import commentSaga from "./commentSaga";
import noteSaga from "./noteSaga";
import tagSaga from "./tagSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([userSaga(), bookSaga(), tagSaga(), commentSaga(), noteSaga()]);
}
