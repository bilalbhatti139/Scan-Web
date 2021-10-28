import React, { Fragment } from "react";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import images
import mobile from "../../assets/mobile.png";
import apple from "../../assets/Apple-link.png";
import android from "../../assets/android-link.png";

// import style
import "./style.scss";

const ScanTheMode = () => {
  return (
    <Fragment>
      <div className="scan-the-code-wrapper">
        <Container>
          <div className="scan-the-code-container">
            <div className="scan-the-code-text">
              <h1>Scan The Mode</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis ut ipsum.
              </p>
              <button>Learn More</button>
              <div className="link-to-app">
                <a href="/">
                  <img
                    src={apple}
                    alt="apple-img"
                    className="img-fluid"
                    width="200"
                  />
                </a>
                <a href="/">
                  <img
                    src={android}
                    alt="android-img"
                    className="img-fluid"
                    width="200"
                  />
                </a>
              </div>
            </div>
            <div className="scan-the-code-mobile-image">
              <img src={mobile} className="img-fluid" alt="mobile-img" />
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default ScanTheMode;
