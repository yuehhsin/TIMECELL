import React, { useState } from 'react';
import styled from 'styled-components';
import Title, { ColBTN } from '../../../../../Style/shareStyled';

const Hotkey = () => {
  const [SP, setSP] = useState(true);
  const handleSP = () => {
    setSP(!SP);
  };
  return (
    <>
      <Title>
        <h4>HOTKEY</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>
      <HotkeyList colSty={SP}>
        <HotkeyInfo style={{ marginTop: '0px' }}>Deselect Event</HotkeyInfo>
        <KeyCode>BackSpace</KeyCode>
        <HotkeyInfo>Close Sidepanel</HotkeyInfo>
        <KeyCode style={{ width: '60px' }}>Tab</KeyCode>
      </HotkeyList>
    </>
  );
};

export default Hotkey;

const HotkeyList = styled.div`
  display: ${(props) => (props.colSty ? 'block' : 'none')};
  height: 100px;
  padding: 0px 18px 60px 18px;
`;
const HotkeyInfo = styled.div`
  color: #fff;
  padding-left: 10px;
  border-left: 2px solid #fff;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
  margin-top: 15px;
`;
const KeyCode = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  width: 120px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
`;
