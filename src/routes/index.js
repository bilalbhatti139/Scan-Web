import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import Footer from "../components/footer";
import Header from "../components/header";

// import pages
import Home from "../pages/Home";
class MainRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default MainRouter;
