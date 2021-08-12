import React, { useState } from 'react';
import firebase, { memberData, initData, provider } from '../../../../firebaseInit';
import 'animate.css';

const SignUp = ({ setSwitch, setSignPop }) => {
  // hook
  const [error, setError] = useState('');

  let email = '';
  let password = '';

  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwitch = () => {
    setSwitch('signin');
  };
  const handleEmail = (e) => {
    email = e.target.value;
  };
  const hanlePasssword = (e) => {
    password = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 註冊
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // 初始化timeInfo
        initData('test@gmail.com');
        // 初始化eventInfo
        memberData
          .doc(email)
          .set({
            eventInfo: [{ content: 'Hello REACT', color: '#36BC9B', id: Math.random() }],
          })
          .then(() => {})
          .catch((E) => {
            console.error('Write Data Error: ', E);
          });
      })
      .catch((ero) => {
        setError(ero.message);
      });
  };
  // Facebook signin
  const handelFB = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('fb ok');
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;
        const { user } = result;
        const { accessToken } = credential;
      })
      .catch((error) => {
        console.log('FB signin error: ', error.message);
        const errorCode = error.code;
        const { email } = error;
        const { credential } = error;
      });
  };
  const handlePopClose = () => {
    setSignPop(false);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;

  return (
    <div
      className="signpopup animate__animated animate__bounce"
      style={{ left: `${popupX}px`, top: '250px' }}
    >
      <button type="button" className="closePop" aria-label="ClosePop" onClick={handlePopClose} />
      <div className="signupImg" />
      <div className="signinBox">
        <h2>CREATE ACCOUNT</h2>
        <form>
          <input placeholder="EMAIL" style={inputStyle} onChange={handleEmail} />
          <input
            placeholder="PASSWORD"
            style={inputStyle}
            type="password"
            onChange={hanlePasssword}
          />
          <div className="social_sign">
            <h5>SOCIAL LOGIN</h5>
            <div className="google" />
            <div className="github" />
            <div className="facebook" onClick={handelFB} />
          </div>
          <button type="submit" className="CTA" onClick={handleSubmit}>
            <h4>SIGN UP</h4>
          </button>
        </form>
        <button type="button" className="switchBTN" onClick={handleSwitch}>
          SIGN IN
        </button>
        <h5 className="errorMessage">{error}</h5>
      </div>
    </div>
  );
};

export default SignUp;
