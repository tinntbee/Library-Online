import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../../redux/actions/userActions";
import "./style.scss";

Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const [message, setMessage] = useState();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleCloseMessageClick = () => {
    setMessage();
  };
  const handleUsernameChange = (e) => {
    setLoginData({ ...loginData, username: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setLoginData({ ...loginData, password: e.target.value });
  };
  const [dirty, setDirty] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state) => state.user);
  const responseGoogle = (res) => {
    setDirty(true);
    console.log(res);
    dispatch(userActions.signInWithGoogle({ tokenId: res.tokenId }));
    //history.push("/bookstore");
  };
  useEffect(() => {
    if (dirty) {
      if (user.loading === false && !user.error && user.user) {
        enqueueSnackbar("Đăng nhập thành công! Đang chuyển hướng...", {
          variant: "success",
        });
        if (history.action !== "POP") {
          history.goBack();
        } else {
          history.replace("/account");
        }
      } else {
        if (user?.error) {
          enqueueSnackbar(user.error, {
            variant: "error",
          });
        }
      }
    }
  }, [user]);
  return (
    <div
      className="login"
      style={{ backgroundImage: `url('assets/images/hcmuteBackground.png')` }}
    >
      <div className="login-cover">
        <div className="login__container">
          <img className="logo" alt="logo" src="assets/svg/logo.svg" />
          <h1>SIGN IN</h1>
          <h2>
            Sử dụng tài khoản <b>Thư viện trực tuyến</b>
          </h2>
          {message && (
            <div className="message">
              <i class="icon fas fa-exclamation-triangle"></i>
              <div className="error-content">
                <p>{message}</p>
              </div>
              <i
                class="icon fas fa-times"
                style={{ float: "right", cursor: "pointer" }}
                onClick={handleCloseMessageClick}
              ></i>
            </div>
          )}
          <div className="form-input">
            <input
              type="text"
              placeholder="Tài khoản"
              value={loginData.username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Mật khẩu"
              value={loginData.password}
              onChange={handlePasswordChange}
            />
            <button
              className="btn-right"
              style={{
                backgroundImage: passwordVisible
                  ? 'url("assets/svg/password-visible.svg")'
                  : 'url("assets/svg/password-invisible.svg")',
              }}
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </div>
          <p className="forgot-password">Quên mật khẩu</p>
          <p className="other-account">Hoặc đăng nhập bằng tài khoản</p>
          <div className="group-btn">
            <GoogleLogin
              clientId="168686532840-8f6as6ppblu170r1v0f337cvpq29l43f.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="sign-in-with-google"
                >
                  Google
                  <img alt="" src="assets/svg/Vectorgoogle_logo.svg" />
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={null}
              cookiePolicy={"single_host_origin"}
            />
            <button className="sign-in-with-facebook">
              Facebook
              <img alt="" src="assets/svg/Vectorfacebook_logo.svg" />
            </button>
          </div>

          <button
            className="submit"
            disabled={!loginData.username || !loginData.password || loading}
          >
            {loading ? (
              <img
                className="loader"
                alt="loading"
                src="assets/svg/loader.svg"
              />
            ) : (
              <img alt="submit" src="assets/svg/arrowRight.svg" />
            )}
          </button>
        </div>
        <div className="quote-container">
          <img alt="" src="assets/images/quote-bg.png" />
          <p>
            <b>"Đọc sách</b> giống như Ong đi <b>tìm mật</b>
          </p>
          <p>
            Phải thật <b>cần mẫn</b> và <b>chăm chỉ"</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
