import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PopUp, CloseBtn, SignText, SignSubmit, PopBG } from '../../style/shareStyled';
import firebase from '../../firebaseInit';
import signupImg from '../../image/signup.png';
import 'animate.css';

const SignUp = () => {
  const [signupMessage, setSignupMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [signupForm] = useState({ email: '', password: '' });

  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(signupForm.email, signupForm.password)
      .then(() => {
        setSignupMessage('Registration Success!!!');
        setMessageColor('#383838');
        setTimeout(() => {
          document.location.href = '/';
        }, 1000);
      })
      .catch((ero) => {
        console.log('signup-error', ero.message);
        setMessageColor('#8B8B8B');
        console.log('input', e.target);
        if (signupForm.email === '' || signupForm.password === '') {
          setSignupMessage('The field cannot be empty');
        } else if (e.code === 'auth/user-not-found') {
          setSignupMessage('Email address has not been registered');
        } else {
          setSignupMessage('Email or password input error');
        }
      });
  };

  return (
    <>
      <Link to="/">
        <PopBG />
      </Link>
      <PopUp>
        <Link to="/">
          <CloseBtn type="button" aria-label="ClosePop" />
        </Link>
        <SignImg />
        <SignText>
          <h1>CREATE ACCOUNT</h1>
          <form>
            <input
              placeholder="EMAIL"
              style={inputStyle}
              onChange={(e) => {
                signupForm.email = e.target.value;
              }}
            />
            <input
              placeholder="PASSWORD"
              style={inputStyle}
              type="password"
              onChange={(e) => {
                signupForm.password = e.target.value;
              }}
            />
            <SignSubmit type="submit" onClick={handleSubmit} color="#36bc9b" colorSel="#1EB28E">
              <h4>SIGN UP</h4>
            </SignSubmit>
          </form>
          <Link to="/signIn">
            <SwitchBtn type="button">SIGN IN</SwitchBtn>
          </Link>
        </SignText>
        <SignupMessage BGcolor={messageColor}>{signupMessage}</SignupMessage>
      </PopUp>
    </>
  );
};

export default SignUp;

// STYLE
const SignImg = styled.div`
  @media (min-width: 100px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: block;
  }
  width: 320px;
  height: 428px;
  background-image: url(${signupImg});
  background-size: cover;
  border-radius: 5px 0px 0px 5px;
  background-color: #f3f3f3;
`;
const SwitchBtn = styled.button`
  padding: 0px;
  font-size: 12px;
  margin-top: 15px;
  letter-spacing: 3px;
  border: none;
  &:hover {
    color: #36bc9b;
    cursor: pointer;
  }
`;
const SignupMessage = styled.h4`
  @media (min-width: 100px) {
    width: 274px;
    bottom: 30px;
  }
  @media (min-width: 800px) {
    width: 334px;
    bottom: 50px;
  }
  background-color: ${(props) => props.BGcolor};
  text-align: center;
  position: absolute;
  padding: 5px 0px 5px 0px;
  bottom: 50px;
  right: 0px;
  color: #fff;
`;
