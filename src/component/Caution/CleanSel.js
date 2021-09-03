import React, { useContext } from 'react';
import 'animate.css';
import { timeblockDataContext } from '../../contexts/contexts';

const Caution = ({ setCaution, selEvent, setEventText }) => {
  const { tbData, eventText } = useContext(timeblockDataContext);

  const handleClosePop = () => {
    setCaution(false);
  };

  const handelDel = () => {
    setEventText(eventText.filter((el) => el.id !== selEvent.id));
    setCaution(false);
    const handleDelEvent = (TB) => {
      for (let i = 0; i < TB.length; i += 1) {
        if (TB[i].event === selEvent.event) {
          TB[i].event = '';
          TB[i].color = '#F4F4F4';
        }
      }
    };
    handleDelEvent(tbData.MON);
    handleDelEvent(tbData.TUE);
    handleDelEvent(tbData.WED);
    handleDelEvent(tbData.THU);
    handleDelEvent(tbData.FRI);
    handleDelEvent(tbData.SAT);
    handleDelEvent(tbData.SUN);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;

  return (
    <>
      <div className="popupBG" onClick={handleClosePop} aria-hidden="true" />
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
          <button type="button" className="popBTN grayBG" onClick={handleClosePop}>
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
