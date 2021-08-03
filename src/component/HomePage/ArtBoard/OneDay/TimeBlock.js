import React, { useEffect, useState } from 'react';

// eslint-disable-next-line object-curly-newline
const TimeBefore = ({ timeClass, TBinfo, selTB, setSelTB, reRender }) => {
  const TBcolor = {
    backgroundColor: TBinfo.color,
    color: TBinfo.color === '#F4F4F4' ? '#000000' : '#FFFFFF',
  };

  // HOOK
  const [timeState, setTimeState] = useState(false); // 紀錄時間塊選取狀態

  const handleTimeState = (e) => {
    if (timeState === false) {
      setSelTB([e.target.dataset.position, ...selTB]);
      setTimeState(true);
    } else if (timeState === true) {
      setSelTB(selTB.filter((sel) => sel !== e.target.dataset.position));
      setTimeState(false);
    }
  };

  useEffect(() => {
    setTimeState(false);
  }, [reRender]);

  const dataSet = `${TBinfo.week}-${TBinfo.time}`;
  return (
    <button
      aria-label="TimeBlock"
      type="button"
      className={timeState ? `${timeClass} timeSel` : timeClass}
      onClick={handleTimeState}
      style={TBcolor}
      data-position={dataSet}
    >
      {TBinfo.event}
    </button>
  );
};
export default TimeBefore;
