import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getUser } from "../../api/user";
import userAPI from "../../api/userAPI";

const apiUrl = "http://";

const userDefault = {
  id: "user1",
  name: "Nguyễn Trung Tín",
  email: "18110381@student.hcmute.edu.vn",
  nickname: "bee",
  avatar:
    "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/240581367_3138938299764392_2228439304544764616_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-qadYtkjyD4AX_iohE4&_nc_ht=scontent.fvca1-4.fna&oh=06cd6be2850f0a3abafb5a881e734b4a&oe=619FC32D",
  hoa: 34,
};

function signInAPI() {
  //call api here
  return userDefault;
}

function* fetchUser(action) {
  try {
    // const user = yield call(getUser);
    const res = yield userAPI.getById(1);
    yield delay(1000);
    yield put({ type: "GET_USER_SUCCESS", user: res });
  } catch (e) {
    yield put({ type: "GET_USER_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeLatest("GET_USER", fetchUser);
}

export default userSaga;
