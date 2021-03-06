import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebaseInit';
import { PopUp, CloseBtn, SignText, SignSubmit, PopBG } from '../../style/shareStyled';
import signinImg from '../../image/signin.png';

const SingIn = () => {
  const [signinForm] = useState({ email: '', password: '' });
  const [signupMessage, setSignupMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(signinForm.email, signinForm.password)
      .then((res) => {
        if (res.user.email === signinForm.email) {
          setMessageColor('#383838');
          setSignupMessage('Sign In Success!!!');
          setTimeout(() => {
            history.push('/');
          }, 1000);
        }
      })
      .catch((error) => {
        setMessageColor('#8B8B8B');
        console.log(error);
        if (signinForm.email === '' || signinForm.password === '') {
          setSignupMessage('The field cannot be empty');
        } else if (error.code === 'auth/user-not-found') {
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
          <CloseBtn type="button" />
        </Link>
        <SignInImg />
        <SignText>
          <h1>SIGN IN</h1>
          <form>
            <input
              placeholder="EMAIL"
              style={inputStyle}
              onChange={(e) => {
                signinForm.email = e.target.value;
              }}
            />
            <input
              placeholder="PASSWORD"
              style={inputStyle}
              type="password"
              onChange={(e) => {
                signinForm.password = e.target.value;
              }}
            />
            <SignSubmit type="submit" onClick={handleSubmit} color="#db4453" colorSel="#D03746">
              <h4>SIGN IN</h4>
            </SignSubmit>
          </form>
          <Link to="/signUp">
            <SwitchBtn type="submit">SIGN UP</SwitchBtn>
          </Link>
        </SignText>
        <SignupMessage BGcolor={messageColor}>{signupMessage}</SignupMessage>
      </PopUp>
    </>
  );
};
export default SingIn;

// STYLE
const SignInImg = styled.div`
  @media (min-width: 100px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: block;
  }
  width: 320px;
  height: 428px;
  background-image: url(${signinImg});
  background-size: cover;
  border-radius: 5px 0px 0px 5px;
`;
const SwitchBtn = styled.button`
  padding: 0px;
  font-size: 12px;
  margin-top: 15px;
  letter-spacing: 3px;
  border: none;
  &:hover {
    color: #db4453;
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

  right: 0px;
  color: #fff;
`;
