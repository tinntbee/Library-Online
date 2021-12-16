import { put, takeLatest } from "@redux-saga/core/effects";
import commentAPI from "../../api/commentAPI";

function* getComments(action) {
  try {
    const res = yield commentAPI.getAllByBookId(action.payload);
    yield put({ type: "GET_COMMENTS_SUCCESS", data: res });
  } catch (e) {
    yield put({ type: "GET_COMMENTS_FAILED", message: e.message });
  }
}

function* commentSaga() {
  yield takeLatest("GET_COMMENTS", getComments);
}

export default commentSaga;
