import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import cleanIcon from '../../icon/cleaning.png';
import cleanIconSel from '../../icon/cleaning_hover.png';
import 'animate.css';
import CleanOptions from './CleanOptions';
import { timeblockDataContext } from '../../contexts/contexts';

const FloatPanel = ({ setCACaution }) => {
  const { selTB } = useContext(timeblockDataContext);
  const [cleanPop, setCleanPop] = useState(false);
  const selTime = `Select  ${selTB.length * 0.5}  Hour`;
  const floatpanel = selTB.length === 0 ? 'none' : 'flex';
  const handleCleanPanel = () => {
    setCleanPop(true);
  };
  const handleClose = () => {
    setCleanPop(false);
  };
  return (
    <>
      <CleanBG onClick={handleClose} displaySty={cleanPop} />
      <Floatpanel className="animate__animated animate__fadeInUp" displaySty={floatpanel}>
        {cleanPop ? (
          <CleanOptions setCACaution={setCACaution} setCleanPop={setCleanPop} selTB={selTB} />
        ) : (
          false
        )}
        <SelTime>{selTime}</SelTime>
        <CleanPanelBtn type="button" onClick={handleCleanPanel} />
      </Floatpanel>
    </>
  );
};
export default FloatPanel;

// STYLE
const CleanBG = styled.div`
  display: ${(props) => (props.displaySty ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 250%;
  top: 0;
  z-index: 1000;
`;
const CleanPanelBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${cleanIcon});
  background-size: cover;
  cursor: pointer;
  &:hover {
    background-image: url(${cleanIconSel});
  }
`;
const Floatpanel = styled.div`
  display: ${(props) => props.displaySty};
  width: 160px;
  height: 40px;
  background-color: #464646;
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  left: calc((100% - 240px) / 2);
  top: 93%;
  transform: translateX(-50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
`;
const SelTime = styled.h5`
  color: #fff;
`;
