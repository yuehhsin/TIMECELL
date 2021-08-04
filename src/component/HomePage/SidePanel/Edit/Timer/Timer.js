import React, { useState, useEffect } from 'react';
import 'animate.css';

import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

const Style = () => {
  // HOOK
  const [SP, setSP] = useState(true); // 開合視窗
  const [time, setTime] = useState('1000');
  const handleSP = () => {
    setSP(!SP);
  };
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const minutes =
        now.getMinutes() < 10 ? `0${now.getMinutes().toString()}` : now.getMinutes().toString();
      const seconds =
        now.getSeconds() < 10 ? `0${now.getSeconds().toString()}` : now.getSeconds().toString();
      setTime(minutes + seconds);
    }, 1000);
  });
  console.log(time[0]);
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
