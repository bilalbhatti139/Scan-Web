import React, { Fragment } from "react";
import uniqid from "uniqid";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import style
import "./style.scss";

// import images
import text from "../../assets/benefits-text.png";

const Benefits = ({ benefits }) => {
  return (
    <Fragment>
      <div className="benefits-wrapper">
        <Container>
          <div className="benefits-wrapper__title">
            <img src={text} alt="text-logo" className="img-fluid" />
          </div>
          <div className="benefits-container">
            {benefits.map((item) => {
              return (
                <div className="benefits-box">
                  <div className={`holder ${item.animation}`} key={uniqid}>
                    <div className="card">
                      <div className="front">
                        <img
                          src={process.env.PUBLIC_URL + item.image}
                          className="img-fluid"
                          alt="front-img"
                        />
                      </div>
                      <div className="back">
                        <img
                          src={process.env.PUBLIC_URL + item.back}
                          className="img-fluid"
                          alt="back-img"
                        />
                      </div>
                    </div>
                  </div>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Benefits;
