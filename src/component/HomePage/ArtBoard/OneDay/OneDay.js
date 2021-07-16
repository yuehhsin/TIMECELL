import React from 'react';
// component
import TimeBlock from './TimeBlock';

const OneDay = ({ day, data, selTB, setSelTB }) => {
  const timeBefore = 'timeblock timeBefore';
  const timeAfter = 'timeblock timeAfter';
  const TBlist = [];
  if (data !== undefined) {
    for (let i = 0; i < 24; i += 0.5) {
      TBlist.push(data[i]);
    }
  }
  return (
    <div className="oneday">
      <h3>{day}</h3>
      {TBlist.map((TBinfo, item) => (
        <TimeBlock
          timeClass={item % 2 === 0 ? timeBefore : timeAfter}
          TBinfo={TBinfo}
          dataSet={`${day}-${0.5 * item}`}
          selTB={selTB}
          setSelTB={setSelTB}
        />
      ))}
    </div>
  );
};
export default OneDay;
