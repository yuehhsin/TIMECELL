import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeBefore = ({ timeBefore, TBinfo, selTB, setSelTB, reRender, mouseDown }) => {
  const TBcolor = {
    backgroundColor: TBinfo.color,
    color: TBinfo.color === '#F4F4F4' ? '#000000' : '#FFFFFF',
  };

  // HOOK
  const [timeState, setTimeState] = useState(false); // 紀錄時間塊選取狀態

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

  const dataSet = `${TBinfo.week}-${TBinfo.time}`;
  return (
    <Timeblock
      type="button"
      onMouseOver={handleTimeState}
      onClick={handleClick}
      style={TBcolor}
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
  width: 140px;
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
`;
