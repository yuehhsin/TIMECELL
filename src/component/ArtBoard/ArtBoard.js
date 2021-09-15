import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';
import { timeblockDataContext } from '../../contexts/contexts';
import foldSPsel from '../../icon/foldSP_sel.png';

const ArtBoard = ({ setSignPop, sidepanel, setSidePanel, userId, setUserId, setSaveCaution }) => {
  const { tbData } = useContext(timeblockDataContext);
  const [mouseDown, setMouseDown] = useState(false);
  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseOut = () => {
    setMouseDown(false);
  };
  const Test = useRef();
  const windowWidth = document.body.clientWidth;
  const scroll = windowWidth - 375;
  const handleLeft = () => {
    Test.current.scrollLeft += scroll + 20;
  };
  const handleRight = () => {
    Test.current.scrollLeft -= scroll + 20;
  };
  useEffect(() => {});
  return (
    <>
      <Artboard onMouseDown={handleMouseDown} onMouseUp={handleMouseOut} sidepanelSty={sidepanel}>
        <LeftBTN onClick={handleLeft} style={windowWidth} />
        <Nav
          setSignPop={setSignPop}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
          userId={userId}
          setUserId={setUserId}
          setSaveCaution={setSaveCaution}
        />
        <TimeLine />
        <Week style={{ right: '100px' }} ref={Test}>
          <OneDay day="MON" data={tbData.MON} mouseDown={mouseDown} />
          <OneDay day="TUE" data={tbData.TUE} mouseDown={mouseDown} />
          <OneDay day="WED" data={tbData.WED} mouseDown={mouseDown} />
          <OneDay day="THU" data={tbData.THU} mouseDown={mouseDown} />
          <OneDay day="FRI" data={tbData.FRI} mouseDown={mouseDown} />
          <OneDay day="SAT" data={tbData.SAT} mouseDown={mouseDown} />
          <OneDay day="SUN" style={{ margin: '0px' }} data={tbData.SUN} mouseDown={mouseDown} />
        </Week>
        <RightBTN onClick={handleRight} style={windowWidth} />
      </Artboard>
    </>
  );
};

export default ArtBoard;

// STYLE
const Artboard = styled.div`
  width: ${(props) => (props.sidepanelSty ? 'calc(100% - 300px)' : 'calc(100% - 60px)')};
  margin-left: 30px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 80px;
`;
const Week = styled.div`
  display: flex;
  overflow: scroll;
`;
const LeftBTN = styled.button`
  display: ${(props) => (props.style > 1478 || props.style < 700 ? 'none' : 'block')};
  width: 22px;
  height: 22px;
  transform: rotate(180deg);
  background-image: url(${foldSPsel});
  background-size: cover;
  background-color: #e0e0e0;
  position: absolute;
  padding: 4px 6px;
  top: 0px;
  left: 30px;
  &:hover {
    background-color: #383838;
    cursor: pointer;
  }
`;
const RightBTN = styled.button`
  display: ${(props) => (props.style > 1478 || props.style < 700 ? 'none' : 'block')};
  position: absolute;
  width: 22px;
  height: 22px;
  background-image: url(${foldSPsel});
  background-size: cover;
  background-color: #e0e0e0;
  padding: 4px 6px;
  top: 0px;
  left: 0px;
  &:hover {
    background-color: #383838;
    cursor: pointer;
  }
`;
