import React, { Fragment } from "react";

// import styles
import "./style.scss";

// import components
import Header from "../header";
import ScanTheMode from "../scanthemode";

const Home = () => {
  return (
    <Fragment>
      <div className="home-header-wrapper">
        <Header />
        <ScanTheMode />
      </div>
    </Fragment>
  );
};

export default Home;
