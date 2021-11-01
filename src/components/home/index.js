import React, { Fragment } from "react";

// import styles
import "./style.scss";

// import components
import Header from "../header";
import ScanTheMode from "../scanthemode";
import Benefits from "../benefits";
import Features from "../features";
import Contact from "../contact";

// import data
import { benefits } from "../../utils/constants";

const Home = () => {
  return (
    <Fragment>
      <div className="home-header-wrapper">
        <Header />
        <ScanTheMode />
      </div>
      <Benefits benefits={benefits} />
      <Features />
      <Contact />
    </Fragment>
  );
};

export default Home;
