import React from 'react';
import styled from 'styled-components';
import { PopUp, CloseBtn, SignText, SignSubmit } from '../../../../Style/shareStyled';
import signinImg from '../../../../image/signin.png';

const SingIn = ({ setSwitch, setSignPop }) => {
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
          <input placeholder="EMAIL" style={inputStyle} />
          <input placeholder="PASSWORD" style={inputStyle} type="password" />
          <SignSubmit type="button" onSubmit={handleSubmit} color="#db4453" colorSel="#D03746">
            <h4>SIGN IN</h4>
          </SignSubmit>
        </form>
        <SwitchBtn type="submit" onClick={handleSwitch}>
          SIGN UP
        </SwitchBtn>
      </SignText>
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
