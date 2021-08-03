import React from 'react';
import 'animate.css';

const CleanACaution = ({
  setCACaution,
  setSelTB,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  setMONTB,
  setReRender,
  reRender,
}) => {
  function cleanAll(List) {
    for (let i = 0; i < List.length; i += 1) {
      List[i].color = '#F4F4F4';
      List[i].event = ' ';
    }
  }
  const handleClosePop = () => {
    setCACaution(false);
  };
  const handelYes = () => {
    setSelTB([]);
    const monList = MONTB;
    const tueList = TUETB;
    const wedList = WEDTB;
    const thuList = THUTB;
    const friList = FRITB;
    const satList = SATTB;
    const sunList = SUNTB;
    cleanAll(monList);
    cleanAll(tueList);
    cleanAll(wedList);
    cleanAll(thuList);
    cleanAll(friList);
    cleanAll(satList);
    cleanAll(sunList);
    setMONTB(monList);
    setCACaution(false);
    setReRender(reRender + 1);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  return (
    <>
      <div className="popupBG" onClick={handleClosePop} />
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
export default CleanACaution;
