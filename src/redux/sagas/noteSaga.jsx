import { put, takeLatest, takeEvery } from "@redux-saga/core/effects";
import noteAPI from "../../api/noteAPI";
import noteAction from "../actions/noteAction";

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

function* changePageCurrent(action) {
  try {
    const { _id, page } = action.payload;
    const res = yield noteAPI.putNoteNumberPage({ _id, page });
    // yield delay(2500);
    yield put(noteAction.putNoteContent(res));
  } catch (e) {
    console.log("update page current fail");
  }
}

function* closeNote(action) {
  try {
    const _id = action.payload;
    const res = yield noteAPI.closeNote(_id);
  } catch (e) {
    console.log("update page current fail");
  }
}

function* noteSaga() {
  yield takeLatest("GET_ALL_NOTES_ACTIVE", getAllNotesActive);
  yield takeLatest("CHANGE_PAGE_CURRENT", changePageCurrent);
  yield takeEvery("CLOSE_NOTES", closeNote);
}

export default noteSaga;
