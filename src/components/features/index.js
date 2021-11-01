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
                <div className="features-wrapper__image">
                  <img
                    src={EC}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4 className="features-wrapper__box-title">Easy Control</h4>
                <hr className="features-wrapper__underline__one" />
                <p className="features-wrapper__body">
                  ease in managing and viewing your finances
                </p>
              </div>
              <div className="features-wrapper__content-box">
                <div className="features-wrapper__image">
                  <img
                    src={FS}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4 className="features-wrapper__box-title">
                  Financial Stability
                </h4>
                <hr className="features-wrapper__underline__two" />
                <p className="features-wrapper__body">
                  Your finance stability is 90% improved with our help
                </p>
              </div>
              <div className="features-wrapper__content-box">
                <div className="features-wrapper__image">
                  <img
                    src={TC}
                    alt="text-logo"
                    className="img-fluid"
                    width="150"
                  />
                </div>
                <h4 className="features-wrapper__box-title">Total control</h4>
                <hr className="features-wrapper__underline__three" />
                <p className="features-wrapper__body">
                  To maintain your comfort in using our features
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
