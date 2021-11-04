import React from "react";

// import images
import left from "../../assets/login-image-left.png";
import message from "../../assets/message.png";
import lock from "../../assets/lock.png";
import eye from "../../assets/eye.png";
import loginGoogle from "../../assets/login-google.png";
import loginFacebook from "../../assets/login-facebook.png";

// import style
import "./style.scss";

const LoginForm = () => {
  return (
    <div className="login-main-wrapper">
      <div className="login-main-wrapper__left-content">
        <img src={left} alt="login-img" className="img-fluid" />
      </div>
      <div className="login-main-wrapper__login-form">
        <div className="login-main-wrapper__login-content">
          <h1>Hi, Welcome Back!</h1>
          <p>
            <strong>Login</strong> Your Account and get Started.
          </p>
          <div className="login-main-wrapper__input-main-wrapper">
            <div className="login-main-wrapper_input-wrapper">
              <img src={message} alt="message-icon" className="img-fluid" />
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div className="login-main-wrapper_input-wrapper">
              <img src={lock} alt="message-icon" className="img-fluid" />
              <input type="text" placeholder="Password" />
              <div className="login-main-wrapper__eye-icon">
                <img src={eye} alt="message-icon" className="img-fluid" />
              </div>
            </div>
            <div className="login-main-wrapper__forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
          </div>
          <div className="login-main-wrapper__login-btn">
            <a href="/">Login</a>
          </div>
          <div className="login-main-wrapper__cotnent-or">
            <div className="login-main-wrapper_divider"></div>
            <div className="login-main-wrapper__or">OR</div>
            <div className="login-main-wrapper_divider"></div>
          </div>
          <p className="login-main-wrapper__get-started">
            Get started with one of these services
          </p>
          <div className="login-main-wrapper__social-login">
            <a href="/">
              <img src={loginGoogle} alt="login-google" />
            </a>
            <a href="/">
              <img src={loginFacebook} alt="login-facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
