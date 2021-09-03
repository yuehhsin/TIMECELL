import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PopUp, CloseBtn, SignText, SignSubmit, PopBG } from '../../style/shareStyled';
import firebase from '../../firebaseInit';
import signupImg from '../../image/signup.png';
import 'animate.css';

const SignUp = () => {
  // hook
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
    // 註冊
    firebase
      .auth()
      .createUserWithEmailAndPassword(signupForm.email, signupForm.password)
      .then(() => {
        setSignupMessage('Registration Success!!!');
        setMessageColor('#383838');
        setTimeout(() => {
          document.location.href = '/signin';
          // setSwitch('signin');
        }, 1000);
        // 初始化timeInfo
        // initData('test@gmail.com');
        // // 初始化eventInfo
        // memberData
        //   .doc(email)
        //   .set({
        //     eventInfo: [{ content: 'Hello REACT', color: '#36BC9B', id: Math.random() }],
        //   })
        //   .then(() => {})
        //   .catch((E) => {
        //     console.error('Write Data Error: ', E);
        //   });
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
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  const popupY = (window.screen.height - 428) / 2 - 100;

  return (
    <>
      <Link to="/">
        <PopBG />
      </Link>
      <PopUp posXsty={popupX} posYsty={popupY}>
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
  width: 350px;
  height: 428px;
  background-image: url(${signupImg});
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
    color: #36bc9b;
    cursor: pointer;
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
