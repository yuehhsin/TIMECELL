import React from 'react';
import './signpopup.css';
import { Link } from 'react-router-dom';

const SignPopUp = () => {
  const inputStyle = {
    fontFamily: 'roboto mono, cursive',
    fontSize: '10px',
    letterSpacing: '2px',
    color: '#000000',
  };
  return (
    <div className="signpopup">
      <div className="signupImg" />
      <div className="signinBox">
        <h2>CREATE ACCOUNT</h2>
        <form>
          <input placeholder="ACCOUNT" style={inputStyle} />
          <input placeholder="EMAIL" style={inputStyle} />
          <input placeholder="PASSWORD" style={inputStyle} type="password" />
          <div className="social_sign">
            <h5>SOCIAL LOGIN</h5>
            <div className="google" />
            <div className="github" />
          </div>
          <Link to="/home">
            <button type="button">SIGN UP</button>
          </Link>
        </form>
        <h5>SIGN IN</h5>
      </div>
    </div>
  );
};

export default SignPopUp;
