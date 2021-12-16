import { delay, put, takeLatest } from "@redux-saga/core/effects";
import categoryAPI from "../../api/tagAPI";

function* getAllTagsByCategories(action) {
  try {
    const res = yield categoryAPI.getAllTagsByCategories();
    // yield delay(2500);
    yield put({ type: "GET_ALL_TAGS_BY_CATEGORIES_SUCCESS", data: res });
  } catch (e) {
    yield put({
      type: "GET_ALL_TAGS_BY_CATEGORIES_FAILED",
      message: e.message,
    });
  }
}

function* tagSaga() {
  yield takeLatest("GET_ALL_TAGS_BY_CATEGORIES", getAllTagsByCategories);
}

export default tagSaga;
