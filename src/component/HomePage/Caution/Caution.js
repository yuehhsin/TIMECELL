import React from 'react';
import 'animate.css';

const Caution = ({ setCaution, selEvent, eventText, setEventText }) => {
  const handleClosePop = () => {
    setCaution(false);
  };
  const handelDel = () => {
    setEventText(eventText.filter((el) => el.id !== selEvent.id));
    setCaution(false);
    // 處理畫面上應該被刪除的時間塊
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;

  return (
    <>
      <div className="popupBG" onClick={handleClosePop} />
      <div
        className=" animate__animated animate__lightSpeedInRight cautionPop"
        style={{ left: `${popupX}px` }}
      >
        <h3>CAUTION</h3>
        <h4>
          This Event is marked ,
          {selEvent.event ? (
            <span>
              all blocks of "<b>{selEvent.event}</b>
" will be erased , Continue delete?
</span>
          ) : (
            <span> , Continue delete?</span>
          )}
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
