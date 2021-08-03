import React from 'react';
import 'animate.css';

const Caution = ({ setCaution, selEvent }) => {
  const handleClosePop = () => {
    setCaution(false);
  };
  const handelDel = () => {
    console.log('click del', selEvent);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  console.log('popupX', popupX);
  return (
    <>
      <div className="popupBG" onClick={handleClosePop} />
      <div
        className=" animate__animated animate__lightSpeedInRight cautionPop"
        style={{ left: `${popupX}px` }}
      >
        <h3>CAUTION</h3>
        <h4>
          This Event is marked , all blocks of
          <span>EVENT</span>
          will be erased,Continue delete?
        </h4>
        <button type="button" className="closePop" aria-label="ClosePop" onClick={handleClosePop} />
        <div className="center">
          <button type="button" className="popBTN grayBG">
            CANCLE
          </button>
          <button type="button" className="popBTN" onClick={handelDel}>
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};
export default Caution;
