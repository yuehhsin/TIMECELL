import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePop from './component/Popup/WelcomePop';
import IndexPage from './component/IndexPage';
import SignIn from './component/Popup/SignIn';
import SignUp from './component/Popup/SignUp';

ReactDOM.render(
  <Router>
    <Route path="/" component={IndexPage} />
    <Route path="/welcome" component={WelcomePop} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/signUp" component={SignUp} />
  </Router>,
  document.querySelector('#root'),
);
