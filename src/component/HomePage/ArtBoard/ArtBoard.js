import React, { useState } from 'react';
import styled from 'styled-components';
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';

const ArtBoard = ({
  selTB,
  setSelTB,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
  setSignPop,
  sidepanel,
  setSidePanel,
  UUID,
  setUUID,
  setSave,
  save,
}) => {
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
          <OneDay
            day="MON"
            data={MONTB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="TUE"
            data={TUETB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="WED"
            data={WEDTB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="THU"
            data={THUTB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="FRI"
            data={FRITB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="SAT"
            data={SATTB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
          <OneDay
            day="SUN"
            data={SUNTB}
            selTB={selTB}
            setSelTB={setSelTB}
            reRender={reRender}
            mouseDown={mouseDown}
          />
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
