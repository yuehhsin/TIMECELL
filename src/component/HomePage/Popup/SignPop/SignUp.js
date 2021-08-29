import React, { useState } from 'react';
import styled from 'styled-components';
import { PopUp, CloseBtn, SignText, SignSubmit } from '../../../../Style/shareStyled';
import firebase, { memberData, initData, provider } from '../../../../firebaseInit';
import signupImg from '../../../../image/signup.png';
import google from '../../../../icon/google.png';
import googleSel from '../../../../icon/google_hover.png';
import github from '../../../../icon/github.png';
import githubSel from '../../../../icon/github_hover.png';
import facebook from '../../../../icon/facebook.png';
import facebookSel from '../../../../icon/facebook_hover.png';
import 'animate.css';

const SignUp = ({ setSwitch, setSignPop }) => {
  // hook
  const [signupMessage, setSignupMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [signupForm, setSignupForm] = useState({ email: '', password: '' });

  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwitch = () => {
    setSwitch('signin');
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
          setSwitch('signin');
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
  const popupY = (window.screen.height - 428) / 2 - 100;

  return (
    <PopUp posXsty={popupX} posYsty={popupY}>
      <CloseBtn type="button" aria-label="ClosePop" onClick={handlePopClose} />
      <SignImg />
      <SignText>
        <h2>CREATE ACCOUNT</h2>
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
          <SocialLogin>
            <h5>SOCIAL LOGIN</h5>
            <GoogleLogin />
            <GithubLogin />
            <FacebookLogin onClick={handelFB} />
          </SocialLogin>
          <SignSubmit type="submit" onClick={handleSubmit} color="#36bc9b" colorSel="#1EB28E">
            <h4>SIGN UP</h4>
          </SignSubmit>
        </form>
        <SwitchBtn type="button" onClick={handleSwitch}>
          SIGN IN
        </SwitchBtn>
      </SignText>
      <SignupMessage BGcolor={messageColor}>{signupMessage}</SignupMessage>
    </PopUp>
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
const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const GoogleLogin = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${google});
  background-size: cover;
  margin-right: 10px;
  &:hover {
    background-image: url(${googleSel});
    cursor: pointer;
  }
`;
const GithubLogin = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${github});
  background-size: cover;
  margin-right: 10px;
  &:hover {
    background-image: url(${githubSel});
    cursor: pointer;
  }
`;
const FacebookLogin = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${facebook});
  background-size: cover;
  margin-right: 10px;
  &:hover {
    background-image: url(${facebookSel});
    cursor: pointer;
  }
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
