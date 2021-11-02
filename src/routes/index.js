import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home/index.js";
import Login from "../pages/Login/index.js";
class MainRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Router>
      </>
    );
  }
}

export default MainRouter;
