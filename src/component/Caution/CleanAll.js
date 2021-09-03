import React, { useContext } from 'react';
import 'animate.css';
import { timeblockDataContext } from '../../contexts/contexts';

const CleanAll = ({ setCACaution, setSelTB }) => {
  const { tbData, reRender, setReRender } = useContext(timeblockDataContext);

  const handleClosePop = () => {
    setCACaution(false);
  };
  const handelYes = () => {
    setSelTB([]);
    function cleanAll(week) {
      for (let i = 0; i < week.length; i += 1) {
        week[i].color = '#F4F4F4';
        week[i].event = ' ';
      }
    }
    cleanAll(tbData.MON);
    cleanAll(tbData.TUE);
    cleanAll(tbData.WED);
    cleanAll(tbData.THU);
    cleanAll(tbData.FRI);
    cleanAll(tbData.SAT);
    cleanAll(tbData.SUN);
    setCACaution(false);
    setReRender(reRender + 1);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  return (
    <>
      <div className="popupBG" onClick={handleClosePop} aria-hidden="true" />
      <div
        className=" animate__animated animate__rubberBand cautionPop"
        style={{ left: `${popupX}px` }}
      >
        <h3>CAUTION</h3>
        <h4>Make sure you want to permanently delete all timeblock info?</h4>
        <button type="button" className="closePop" aria-label="ClosePop" onClick={handleClosePop} />
        <div className="center">
          <button type="button" className="popBTN grayBG" onClick={handleClosePop}>
            CANCLE
          </button>
          <button type="button" className="popBTN" onClick={handelYes}>
            100% SURE
          </button>
        </div>
      </div>
    </>
  );
};
export default CleanAll;
