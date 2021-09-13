import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { timeblockDataContext } from '../../../contexts/contexts';

const TimeBefore = ({ timeBefore, TBinfo, mouseDown }) => {
  const TBcolor = {
    backgroundColor: TBinfo.color,
    color: TBinfo.color === '#F4F4F4' ? '#000000' : '#FFFFFF',
  };
  // HOOK
  const { reRender, selTB, setSelTB } = useContext(timeblockDataContext);
  const [timeState, setTimeState] = useState(false);

  const handleTimeState = (e) => {
    if (mouseDown) {
      if (timeState === false) {
        setSelTB([e.target.dataset.position, ...selTB]);
        setTimeState(true);
      } else if (timeState === true) {
        setSelTB(selTB.filter((sel) => sel !== e.target.dataset.position));
        setTimeState(false);
      }
    }
  };
  const handleClick = (e) => {
    if (timeState === false) {
      setSelTB([e.target.dataset.position, ...selTB]);
      setTimeState(true);
    } else if (timeState === true) {
      setSelTB(selTB.filter((sel) => sel !== e.target.dataset.position));
      setTimeState(false);
    }
  };

  useEffect(() => {
    setTimeState(false);
  }, [reRender]);

  const TBwidth = document.body.clientWidth - 375;
  const TBwidthLap = (document.body.clientWidth - 415) / 3;

  const dataSet = `${TBinfo.week}-${TBinfo.time}`;
  return (
    <Timeblock
      type="button"
      onMouseOver={handleTimeState}
      onClick={handleClick}
      style={TBcolor}
      styleWidth={TBwidth}
      styleWidthLap={TBwidthLap}
      data-position={dataSet}
      borderSty={timeState}
      blockSty={timeBefore}
    >
      {TBinfo.event}
    </Timeblock>
  );
};
export default TimeBefore;

// STYLE
const Timeblock = styled.button`
  @media (min-width: 500px) {
    width: ${(props) => props.styleWidth}px;
    // height: 45px;
  }
  @media (min-width: 768px) {
    width: ${(props) => props.styleWidthLap}px;
  }
  @media (min-width: 1478px) {
    // height: 40px;
    width: 140px;
  }
  width: ${(props) => props.styleWidth}px;
  height: 40px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: ${(props) => (props.borderSty ? '2px solid #88e0fe' : 'none')};
  border-radius: ${(props) => (props.blockSty ? '5px 5px 0px 0px' : '0px 0px 5px 5px')};
  margin-top: ${(props) => (props.blockSty ? 'none' : '5px')};
  margin-bottom: ${(props) => (props.blockSty ? 'none' : '10px')};
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
