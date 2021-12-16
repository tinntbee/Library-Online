import { delay, put, takeLatest, takeEvery } from "@redux-saga/core/effects";
import bookAPI from "../../api/bookAPI";

function* getBooksSlide(action) {
  try {
    const res = yield bookAPI.getBooksSlide();
    yield put({ type: "GET_BOOKS_SLIDE_SUCCESS", data: res });
  } catch (e) {
    yield put({ type: "GET_BOOKS_SLIDE_FAILED", message: e.message });
  }
}

function* getBooksForYou(action) {
  try {
    const res = yield bookAPI.getBooksForYou();
    // yield delay(2500);
    yield put({ type: "GET_BOOKS_FOR_YOU_SUCCESS", data: res });
  } catch (e) {
    yield put({ type: "GET_BOOKS_FOR_YOU_FAILED", message: e.message });
  }
}

function* getBooksByTags(action) {
  try {
    console.log(action);
    const res = yield bookAPI.getBooksByTags(action.payload);
    // yield delay(3000);
    yield put({ type: "GET_BOOKS_BY_TAGS_SUCCESS", data: res });
  } catch (e) {
    yield put({ type: "GET_BOOKS_BY_TAGS_FAILED", message: e.message });
  }
}

function* getBookDetail(action) {
  try {
    const res = yield bookAPI.getById(action.payload);
    // yield delay(3000);
    yield put({ type: "GET_BOOK_DETAIL_SUCCESS", data: res });
  } catch (e) {
    yield put({ type: "GET_BOOK_DETAIL_FAILED", message: e.message });
  }
}

function* bookSaga() {
  yield takeLatest("GET_BOOKS_SLIDE", getBooksSlide);
  yield takeLatest("GET_BOOKS_FOR_YOU", getBooksForYou);
  yield takeEvery("GET_BOOKS_BY_TAGS", getBooksByTags);
  yield takeLatest("GET_BOOK_DETAIL", getBookDetail);
}

export default bookSaga;
