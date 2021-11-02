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
            <div className="footer-main__col-3"></div>
          </div>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
