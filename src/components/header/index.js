import React, { Fragment } from "react";

// import bootstrap components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import style
import "./style.scss";

// import images
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Fragment>
      <div className="header-wrapper">
        <Container>
          <div className="header-container">
            <div className="logo">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <div className="main-menu">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Benefits</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="login-btn">
              <a href="/login">Login</a>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

// Wrap everything in <UseWalletProvider />
export default Header;
