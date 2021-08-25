import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <>
    <NavBar>
      <SignBtn type="button">SIGN IN</SignBtn>
    </NavBar>
  </>
);

export default Nav;

const NavBar = styled.div`
  height: 48px;
  background: #383838;
  display: flex;
  align-items: center;
`;
const SignBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 16px 0px 16px 0px;
  padding: 5px 8px 5px 8px;
  color: #fff;
  position: absolute;
  border: 1px solid transparent;
  right: 20px;
  &:hover {
    border: 1px solid #fff;
    border-radius: 5px;
  }
`;
