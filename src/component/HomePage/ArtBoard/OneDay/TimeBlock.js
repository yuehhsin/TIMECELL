import React, { useState } from 'react';

const TimeBefore = ({ timeClass, TBinfo, dataSet, selTB, setSelTB }) => {
  const TBcolor = { backgroundColor: TBinfo.color };
  const TBevent = TBinfo.event;
  // HOOK
  const [timeState, setTimeState] = useState('A'); // 紀錄時間塊選取狀態(state: A:未選取 B:選取 C:已填入事件)
  const handleTimeState = (e) => {
    console.log(selTB);
    if (timeState === 'A') {
      setTimeState('B');
      e.target.classList.add('timeSel');
      // setSelTB(...e.target.dataset.position);
    } else if (timeState === 'B') {
      setTimeState('A');
      e.target.classList.remove('timeSel');
    }
  };
  return (
    <button
      aria-label="TimeBlock"
      type="button"
      className={timeClass}
      onClick={handleTimeState}
      style={TBcolor}
      data-position={dataSet}
    >
      {TBevent}
    </button>
  );
};
export default TimeBefore;
