import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';
import { timeblockDataContext } from '../../contexts';

const ArtBoard = ({ setSignPop, sidepanel, setSidePanel, UUID, setUUID, setSave, save }) => {
  const { tbData } = useContext(timeblockDataContext);
  const [mouseDown, setMouseDown] = useState(false);
  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseOut = () => {
    setMouseDown(false);
  };
  return (
    <>
      <Artboard
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseOut}
        sidepanelSty={sidepanel}
        setUUID={setUUID}
      >
        <Nav
          setSignPop={setSignPop}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
          UUID={UUID}
          setUUID={setUUID}
          setSave={setSave}
          save={save}
        />
        <TimeLine />
        <Week>
          <OneDay day="MON" data={tbData.MON} mouseDown={mouseDown} />
          <OneDay day="TUE" data={tbData.TUE} mouseDown={mouseDown} />
          <OneDay day="WED" data={tbData.WED} mouseDown={mouseDown} />
          <OneDay day="THU" data={tbData.THU} mouseDown={mouseDown} />
          <OneDay day="FRI" data={tbData.FRI} mouseDown={mouseDown} />
          <OneDay day="SAT" data={tbData.SAT} mouseDown={mouseDown} />
          <OneDay day="SUN" data={tbData.SUN} mouseDown={mouseDown} />
        </Week>
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
