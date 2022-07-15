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

function* SignInWithGoogle(action) {
  try {
    // const user = yield call(getUser);
    const res = yield userAPI.signInWithGoogle(action.payload);
    // yield delay(1000);
    // console.log(res);
    yield put({ type: "SIGN_IN_WITH_GOOGLE_SUCCESS", res: res });
  } catch (e) {
    switch (e.response.status) {
      case 406:
        yield put({
          type: "SIGN_IN_WITH_GOOGLE_FAILED",
          message: "Đăng nhập bị từ chối, tài khoản đã bị khóa !",
        });
        break;
      case 404:
        yield put({
          type: "SIGN_IN_WITH_GOOGLE_FAILED",
          message: "Đăng nhập bị từ chối, tài khoản chưa được đăng kí !",
        });
        break;
      default:
        yield put({
          type: "SIGN_IN_WITH_GOOGLE_FAILED",
          message: "Đăng nhập bị từ chối, thử lại sau !",
        });
        break;
    }
  }
}

function* ReSign(action) {
  try {
    // const token = localStorage.getItem("token");
    const res = yield userAPI.reSign();
    yield put({ type: "RE_SIGN_SUCCESS", res: res });
  } catch (e) {
    yield put({
      type: "RE_SIGN_FAILED",
      message: "Có lỗi sảy ra vui lòng đăng nhập lại !",
    });
  }
}

function* userSaga() {
  yield takeLatest("SIGN_IN_WITH_GOOGLE", SignInWithGoogle);
  yield takeLatest("RE_SIGN", ReSign);
}

export default userSaga;
