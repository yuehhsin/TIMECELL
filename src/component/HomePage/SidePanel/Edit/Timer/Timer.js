import React, { useState, useEffect } from 'react';
import 'animate.css';

import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

const Style = () => {
  // HOOK
  const [SP, setSP] = useState(true); // 開合視窗
  const [time, setTime] = useState('0000');
  const handleSP = () => {
    setSP(!SP);
  };

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      let getMin;
      let getSec;
      if (now.getSeconds() !== 0) {
        if (now.getMinutes() > 30) {
          getMin = 30 - (now.getMinutes() - 30) - 1;
        } else if (now.getMinutes() < 30) {
          getMin = 30 - now.getMinutes() - 1;
        }
        getSec = 60 - now.getSeconds();
      } else if (now.getSeconds() === 0) {
        if (now.getMinutes() > 30) {
          getMin = 30 - (now.getMinutes() - 30);
        }
        if (now.getMinutes() < 30) {
          getMin = 30 - now.getMinutes();
        }
        getSec = 0;
      }
      console.log(getMin, getSec);
      const minutes = getMin < 10 ? `0${getMin}` : getMin.toString();
      const seconds = getSec < 10 ? `0${getSec}` : getSec.toString();
      setTime(minutes + seconds);
    }, 1000);
  });

  return (
    <>
      <div className="styleTit">
        <h4>TIMER</h4>
        <button
          type="button"
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
          aria-label="collapse"
        />
      </div>
      {SP ? (
        <>
          <div className="timer">
            <div className="time animate__animated animate__headShake">{time[0]}</div>
            <div className="time animate__animated animate__headShake">{time[1]}</div>
            <div className="timedot" />
            <div className="time animate__animated animate__headShake">{time[2]}</div>
            <div className="time animate__animated animate__headShake">{time[3]}</div>
          </div>
          <div className="timeInfo">
            <h6>MINUTES</h6>
            <h6>SECONDS</h6>
          </div>
        </>
      ) : (
        false
      )}
    </>
  );
};
export default Style;
