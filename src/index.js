import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// page
import HomePage from './component/HomePage/HomePage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>,
  document.querySelector('#root'),
);
