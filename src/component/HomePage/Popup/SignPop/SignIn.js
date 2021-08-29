import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../../../../firebaseInit';
import { PopUp, CloseBtn, SignText, SignSubmit } from '../../../../Style/shareStyled';
import signinImg from '../../../../image/signin.png';

const SingIn = ({ setSwitch, setSignPop, setUUID }) => {
  const [signinForm, setSigninForm] = useState({ email: '', password: '' });
  const [signupMessage, setSignupMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwitch = () => {
    setSwitch('signup');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(signinForm.email, signinForm.password)
      .then((res) => {
        setUUID(res.user.uid);
        if (res.user.email === signinForm.email) {
          setMessageColor('#383838');
          setSignupMessage('Sign In Success!!!');
          setTimeout(() => {
            setSignPop(false);
          }, 1000);
          // localStorage.setItem('email', JSON.stringify(signinForm.email));
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
  const handlePopClose = () => {
    setSignPop(false);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  const popupY = (window.screen.height - 428) / 2 - 100;

  return (
    <PopUp posXsty={popupX} posYsty={popupY}>
      <CloseBtn type="button" aria-label="ClosePop" onClick={handlePopClose} />
      <SignInImg />
      <SignText>
        <h2>SIGN IN</h2>
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
        <SwitchBtn type="submit" onClick={handleSwitch}>
          SIGN UP
        </SwitchBtn>
      </SignText>
      <SignupMessage BGcolor={messageColor}>{signupMessage}</SignupMessage>
    </PopUp>
  );
};
export default SingIn;

// STYLE
const SignInImg = styled.div`
  width: 350px;
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
  }
`;
const SignupMessage = styled.h4`
  background-color: ${(props) => props.BGcolor};
  text-align: center;
  position: absolute;
  padding: 5px 0px 5px 0px;
  bottom: 50px;
  right: 0px;
  width: 378px;
  color: #fff;
`;
