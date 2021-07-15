import React, { useState } from 'react';
import firebase from '../../../firebaseInit';

const SignUp = ({ setSwi }) => {
  // hook
  const [error, setError] = useState('');

  let email = '';
  let password = '';

  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwi = () => {
    setSwi('signin');
  };
  const handleEmail = (e) => {
    email = e.target.value;
  };
  const hanlePasssword = (e) => {
    password = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((ero) => {
        setError(ero.message);
        console.log(error.code);
      });
  };
  return (
    <div className="signpopup">
      <div className="signupImg" />
      <div className="signinBox">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="EMAIL" style={inputStyle} onChange={handleEmail} />
          <input
            placeholder="PASSWORD"
            style={inputStyle}
            type="password"
            onChange={hanlePasssword}
          />
          <h5 className="errorMessage">{error}</h5>
          <div className="social_sign">
            <h5>SOCIAL LOGIN</h5>
            <div className="google" />
            <div className="github" />
          </div>
          <button type="submit" className="CTA">
            <h4>SIGN UP</h4>
          </button>
        </form>
        <button type="button" className="switchBTN" onClick={handleSwi}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SignUp;
