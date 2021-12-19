import { put, takeLatest } from "@redux-saga/core/effects";
import noteAPI from "../../api/noteAPI";

function* getAllNotesActive(action) {
  try {
    const res = yield noteAPI.getNotesActive();
    // yield delay(2500);
    yield put({ type: "GET_ALL_NOTES_ACTIVE_SUCCESS", data: res });
  } catch (e) {
    yield put({
      type: "GET_ALL_NOTES_ACTIVE_FAILED",
      message: e.message,
    });
  }
}

function* noteSaga() {
  yield takeLatest("GET_ALL_NOTES_ACTIVE", getAllNotesActive);
}

export default noteSaga;
