import React, { Fragment } from "react";
import uniqid from "uniqid";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import style
import "./style.scss";

const Benefits = ({ benefits }) => {
  return (
    <Fragment>
      <div className="benefits-wrapper">
        <Container>
          <div className="benefits-container">
            {benefits.map((item) => {
              return (
                <div className="benefits-box" key={uniqid}>
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt="benefit-img"
                    className="img-fluid"
                  />
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
