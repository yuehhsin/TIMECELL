import React from 'react';
import styled from 'styled-components';
import 'animate.css';
import { Link } from 'react-router-dom';
import KVimage from '../../image/Welcome.png';
import { PopBG } from '../../style/shareStyled';

const WelcomePop = () => {
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  return (
    <>
      <Link to="/">
        <PopBG className="popupBG" />
      </Link>
      <WelcomePopUp
        className=" animate__animated animate__rubberBand"
        style={{ left: `${popupX}px`, top: '300px' }}
      >
        <Content>
          <h2>WELCOME TO TIMECELL</h2>
          <h4>
            TIMECELL is an experimental online time planning tool. Based on the theory of time
            digitization and limited time of concentration, Dividing time into blocks every thirty
            minutes, just like time cells. And with simple mouse click and drag functions, You can
            quickly plan and record the time you have 💛
          </h4>
          <Link to="/">
            <button type="button">TAKE A TRY</button>
          </Link>
        </Content>
        <KV />
      </WelcomePopUp>
    </>
  );
};

export default WelcomePop;

const WelcomePopUp = styled.div`
  width: 800px;
  height: 480px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  z-index: 1003;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
  border-radius: 10px;
`;
const KV = styled.div`
  width: 60%;
  background-image: url(${KVimage});
  background-size: cover;
  border-radius: 0px 5px 5px 0px;
`;
const Content = styled.div`
  width: 40%;
  padding: 30px;
  & h2 {
    margin-top: 20px;
    font-size: 20px;
  }
  & h4 {
    margin-top: 20px;
    font-weight: 400;
    line-height: 25px;
  }
  & button {
    padding: 10px 12px 10px 12px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #36bc9b;
    color: #fff;
    &:hover {
      background-color: #32b192;
    }
  }
`;
