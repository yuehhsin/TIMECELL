import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page
import HomePage from "./page/HomePage/HomePage";
import StartPage from "./page/StartPage/StartPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>,
  document.querySelector("#root")
);
