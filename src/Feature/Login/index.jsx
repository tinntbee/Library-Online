import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../../redux/actions/userActions";
import "./style.scss";

Login.propTypes = {};

function Login(props) {
  const [dirty, setDirty] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state) => state.user);
  const responseGoogle = (res) => {
    setDirty(true);
    console.log(res);
    if (res.Qu.Gv.includes("@student.hcmute.edu.vn")) {
      dispatch(userActions.signInWithGoogle({ tokenId: res.tokenId }));
    } else {
      enqueueSnackbar(
        "Vui lòng đăng nhập với tài khoản có đuôi student.hcmute.edu.vn",
        {
          variant: "info",
        }
      );
    }
    //history.push("/bookstore");
  };
  useEffect(() => {
    if (dirty) {
      if (user.loading === false && !user.error && user.user) {
        console.log({ history });
        if (history.action !== "POP") {
          history.goBack();
        } else {
          history.replace("/account");
        }
      } else {
        if (user?.error) {
          console.log({ user });
          enqueueSnackbar(user.error, {
            variant: "error",
          });
        }
      }
    }
  }, [user]);
  return (
    <div className="login">
      <div
        className="login__thumbnail"
        style={{ backgroundImage: `url(assets/images/thumbnail.jpg)` }}
      />
      <div className="login__container">
        <p>Sign in with</p>
        <GoogleLogin
          clientId="168686532840-8f6as6ppblu170r1v0f337cvpq29l43f.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="sign-in-with-google"
            >
              HCMUTE Student Gmail
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={null}
          cookiePolicy={"single_host_origin"}
        />
        <button className="sign-in-with-account">Bee Library Account</button>
      </div>
    </div>
  );
}

export default Login;
