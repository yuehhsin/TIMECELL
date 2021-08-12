import React from 'react';
import 'animate.css';

const WelcomePop = ({ setWelcomePop }) => {
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  const handleClosePop = () => {
    setWelcomePop(false);
  };
  return (
    <>
      <div className="popupBG" onClick={handleClosePop} />
      <div
        className=" animate__animated animate__rubberBand cautionPop cautionPop"
        style={{ left: `${popupX}px` }}
      >
        <h3>WELCOME TO TIMECELL</h3>
        <h4>
          In Here, you can quickly plan and record a whole week by{' '}
          <span>
            <b>"CLICK AND SELECT"</b>
          </span>
        </h4>
        <div className="welPTNScope">
          <button type="button" className="popBTN welcomeBTN" onClick={handleClosePop}>
            TAKE A TRY
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePop;
