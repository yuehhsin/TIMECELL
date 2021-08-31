import React, { useContext } from 'react';
import styled from 'styled-components';
import { timeblockDataContext } from '../../contexts';

const CleanPop = ({ setCACaution, setCleanPop }) => {
  const { tbData, selTB, reRender, setReRender } = useContext(timeblockDataContext);
  const handleCleanAll = () => {
    setCACaution(true);
    setCleanPop(false);
  };
  const delTB = (List, Week, TB) => {
    for (let i = 0; i < List.length; i += 1) {
      if (List[i].split('-')[0] === Week) {
        const index = parseFloat(List[i].split('-')[1]) / 0.5;
        TB[index].event = '';
        TB[index].color = '#F4F4F4';
        setReRender(reRender + 1);
      }
    }
  };
  const handleCleanSel = () => {
    const List = selTB;
    delTB(List, 'MON', tbData.MON);
    delTB(List, 'TUE', tbData.TUE);
    delTB(List, 'WED', tbData.WED);
    delTB(List, 'THU', tbData.THU);
    delTB(List, 'FRI', tbData.FRI);
    delTB(List, 'SAT', tbData.SAT);
    delTB(List, 'SUN', tbData.SUN);
  };
  return (
    <>
      <CleanPopUp>
        <CleanBtn onClick={handleCleanSel}>CLEAN</CleanBtn>
        <CleanAllBtn onClick={handleCleanAll}>CLEAN ALL</CleanAllBtn>
      </CleanPopUp>
    </>
  );
};
export default CleanPop;

const CleanPopUp = styled.div`
  position: absolute;
  width: 100px;
  background-color: #fff;
  left: 150px;
  bottom: 10px;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  z-index: 1002;
  & h5 {
    color: #000000;
    padding: 7px 10px 7px 10px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
const CleanBtn = styled.h5`
  border-bottom: 1px solid #000000;
  &:hover {
    border-radius: 2px 2px 0px 0px;
  }
`;
const CleanAllBtn = styled.h5`
  &:hover {
    border-radius: 0px 0px 2px 2px;
  }
`;
