import React, { Fragment } from "react";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import style
import "./style.scss";

// import images
import text from "../../assets/contact-text.png";
import woman from "../../assets/woman.png";
import profile from "../../assets/profile.png";
import chat from "../../assets/chat.png";
import message from "../../assets/message.png";
import phone from "../../assets/phone.png";

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-us-wrapper">
        <div className="contact-us-wrapper__title">
          <img src={text} alt="text-logo" className="img-fluid" />
        </div>
        <div className="contact-us-wrapper__container">
          <Container>
            <div className="contact-us-wrapper__contact-row">
              <div className="contact-us-wrapper__woman">
                <img src={woman} alt="woman-img" className="img-fluid" />
              </div>
              <div className="contact-us-wrapper__contact-form">
                <div className="contact-us-wrapper__form-box">
                  <div className="contact-us-wrapper__input-wrapper">
                    <div className="contact-us-wrapper__input">
                      <label className="contact-us-wrapper__label">
                        Your Name
                      </label>
                      <div className="contact-us-wrapper__input-grey-bg">
                        <img
                          src={profile}
                          alt="text-logo"
                          className="img-fluid contact-us-wrapper__icon"
                        />
                        <input
                          type="text"
                          className="contact-us-wrapper__input"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="contact-us-wrapper__input">
                      <label className="contact-us-wrapper__label">Email</label>
                      <div className="contact-us-wrapper__input-grey-bg">
                        <img
                          src={message}
                          alt="text-logo"
                          className="img-fluid contact-us-wrapper__icon"
                        />
                        <input
                          type="text"
                          className="contact-us-wrapper__input"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="contact-us-wrapper__input">
                      <label className="contact-us-wrapper__label">
                        Mobile
                      </label>
                      <div className="contact-us-wrapper__input-grey-bg">
                        <img
                          src={phone}
                          alt="text-logo"
                          className="img-fluid contact-us-wrapper__icon"
                        />
                        <input
                          type="text"
                          className="contact-us-wrapper__input"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="contact-us-wrapper__input">
                      <label className="contact-us-wrapper__label">
                        Message
                      </label>
                      <div className="contact-us-wrapper__input-grey-bg">
                        <img
                          src={chat}
                          alt="text-logo"
                          className="img-fluid contact-us-wrapper__icon"
                        />
                        <input
                          type="text"
                          className="contact-us-wrapper__input"
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="contact-us-wrapper__send-btn">Send</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
