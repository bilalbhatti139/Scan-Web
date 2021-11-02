import React from "react";

// import images
import left from "../../assets/login-image-left.png";
import message from "../../assets/message.png";
import lock from "../../assets/lock.png";

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
