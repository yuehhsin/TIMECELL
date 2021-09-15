import React from 'react';
import styled from 'styled-components';
// import 'animate.css';
import { Link } from 'react-router-dom';
import welcomeKv from '../../image/welcomeKv.gif';
import { PopBG } from '../../style/shareStyled';

const WelcomePop = () => (
  <>
    <Link to="/">
      <PopBG className="popupBG" />
    </Link>
    <WelcomePopUp>
      <KV />
      <Content>
        <h2>WELCOME TO TIMECELL</h2>
        <h4>
          TIMECELL is an experimental online time planning tool. And with simple mouse click and
          drag functions, You can quickly plan and record the time you have 🌼
          <span>
            <a
              href="https://github.com/yuehhsin/TIMECELL#features"
              target="_blank"
              rel="noreferrer"
            >
              See More
            </a>
          </span>
        </h4>
        <Link to="/">
          <button type="button">TAKE A TRY</button>
        </Link>
      </Content>
    </WelcomePopUp>
  </>
);
export default WelcomePop;

const WelcomePopUp = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fff;
  border-radius: 5px;
  z-index: 1003;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
  border-radius: 10px;
`;
const KV = styled.div`
  @media (min-width: 100px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: block;
  }
  width: 800px;
  height: 442.78px;
  background-image: url(${welcomeKv});
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;
const Content = styled.div`
  @media (min-width: 100px) {
    width: 280px;
    padding: 20px;
  }
  @media (min-width: 800px) {
    width: 740px;
    padding: 30px;
  }

  & h2 {
    margin-top: 10px;
    font-size: 20px;
  }
  & h4 {
    margin-top: 10px;
    font-weight: 400;
    line-height: 25px;
  }
  & span {
    margin-left: 5px;
  }
  & a {
    font-weight: bold;
    color: #f2c72d;
    cursor: pointer;
    &:hover {
      color: #f2802d;
    }
  }
  & button {
    padding: 10px 12px 10px 12px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #36bc9b;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #32b192;
    }
  }
`;
