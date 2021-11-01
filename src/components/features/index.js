import React, { Fragment } from "react";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import style
import "./style.scss";

// import images
import text from "../../assets/features-text.png";
import EC from "../../assets/easy-control.png";
import FS from "../../assets/financial-stability.png";
import TC from "../../assets/total-control.png";

const Features = () => {
  return (
    <Fragment>
      <div className="features-wrapper">
        <div className="features-wrapper__title">
          <img src={text} alt="text-logo" className="img-fluid" />
        </div>
        <div className="features-wrapper__blue-bg">
          <Container>
            <div className="features-wrapper__container">
              <div className="features-wrapper__content-box">
                <div className="features-wrapper__img">
                  <img
                    src={EC}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4>Easy Control</h4>
                <p>ease in managing and viewing your finances</p>
              </div>
              <div className="features-wrapper__content-box">
                <div className="features-wrapper__img">
                  <img
                    src={FS}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4>Financial Stability</h4>
                <p>Your finance stability is 90% improved with our help</p>
              </div>
              <div className="features-wrapper__content-box">
                <div className="features-wrapper__img">
                  <img
                    src={TC}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4>Total control</h4>
                <p>To maintain your comfort in using our features</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
