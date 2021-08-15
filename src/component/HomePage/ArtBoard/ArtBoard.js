import React, { useState } from 'react';
import styled from 'styled-components';
import './artboard.css';
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
      <Artboard onMouseDown={handleMouseDown} onMouseUp={handleMouseOut}>
        <Nav setSignPop={setSignPop} />
        <TimeLine />
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
      </Artboard>
    </>
  );
};

export default ArtBoard;

// STYLE
const Artboard = styled.div`
  width: calc(100% - 240px);
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 80px;
`;
