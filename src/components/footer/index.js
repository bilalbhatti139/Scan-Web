import React, { Fragment } from "react";

// import style
import "./style.scss";

// import bootstrap components
import Container from "react-bootstrap/Container";

// import images
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import location from "../../assets/location.png";
import call from "../../assets/call.png";
import email from "../../assets/message-footer.png";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-main">
        <Container>
          <div className="footer-main__footer-wrapper">
            <div className="footer-main__col-1">
              <img src={logo} alt="logo" className="img-fluid" />
              <div className="footer-main__social-icons">
                <a href="#" className="footer-main__item">
                  <img src={facebook} alt="facebook-icon" />
                </a>
                <a href="#" className="footer-main__item">
                  <img src={youtube} alt="facebook-icon" />
                </a>{" "}
                <a href="#" className="footer-main__item">
                  <img src={twitter} alt="facebook-icon" />
                </a>{" "}
                <a href="#" className="footer-main__item">
                  <img src={instagram} alt="facebook-icon" />
                </a>
              </div>
            </div>
            <div className="footer-main__col-2">
              <div className="footer-main__links">
                <h1>Links</h1>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-main__col-3">
              <div className="footer-main__address">
                <div className="footer-main__address-content">
                  <img
                    src={location}
                    alt="location-icon"
                    className="img-fluid"
                  />
                  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
                <div className="footer-main__address-content">
                  <img src={call} alt="location-icon" className="img-fluid" />
                  <p>+91 9988776655 </p>
                </div>
                <div className="footer-main__address-content">
                  <img src={email} alt="location-icon" className="img-fluid" />
                  <p>debra.holt@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className="footer-main__mini-footer">
        Copyright 2021 ©SCANNER. All Rights Reserved.
      </div>
    </Fragment>
  );
};

export default Footer;
