import React, { useState } from 'react';
import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';
import Doughnuts from './Doughnut';

const Statistic = ({ eventText, MONTB, TUETB, WEDTB, THUTB, FRITB, SATTB, SUNTB }) => {
  // HOOK
  const [SP, setSP] = useState(true); // 開合視窗
  const [selDay, selSelDay] = useState('WEEK'); // dropdown value
  const handleSP = () => {
    setSP(!SP);
  };
  const handleSelect = (e) => {
    selSelDay(e.target.value);
  };
  return (
    <>
      <div className="eventTit">
        <h4>STATISTIC</h4>
        <button
          type="button"
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
          aria-label="collapse"
        />
      </div>
      {SP ? (
        <div className="anaBoard">
          <select name="day" className="dayDropdpwn" onChange={handleSelect}>
            <option value="WEEK">WEEK</option>
            <option value="MON">MON</option>
            <option value="TUE">TUE</option>
            <option value="WED">WED</option>
            <option value="THU">THU</option>
            <option value="FRI">FRI</option>
            <option value="SAT">SAT</option>
            <option value="SUN">SUN</option>
          </select>
          <Doughnuts
            eventText={eventText}
            MONTB={MONTB}
            TUETB={TUETB}
            WEDTB={WEDTB}
            THUTB={THUTB}
            FRITB={FRITB}
            SATTB={SATTB}
            SUNTB={SUNTB}
            selDat={selDay}
          />
        </div>
      ) : (
        false
      )}
    </>
  );
};
export default Statistic;
