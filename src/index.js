import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// page
import HomePage from './component/HomePage/HomePage';
import IndexPage from './component/IndexPage/IndexPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>,
  document.querySelector('#root'),
);
