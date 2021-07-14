import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// page
import HomePage from './component/HomePage/HomePage';
import SignPage from './component/SignPage/SignPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/sign" exact component={SignPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>,
  document.querySelector('#root'),
);
