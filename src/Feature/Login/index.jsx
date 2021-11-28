import React from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import "./style.scss";
import { useHistory } from "react-router";

Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const responseGoogle = (res) => {
    console.log(res);
    history.push("/bookstore");
  };
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
