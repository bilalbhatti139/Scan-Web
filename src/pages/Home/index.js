import React, { Fragment } from "react";

// import styles
import "./style.scss";

// import components
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScanTheMode from "../../components/scanthemode";
import Benefits from "../../components/benefits";
import Features from "../../components/features";
import Contact from "../../components/contact";

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
      <Footer />
    </Fragment>
  );
};

export default Home;
