import React from 'react';
// component
import TimeBlock from './TimeBlock';

// eslint-disable-next-line object-curly-newline
const OneDay = ({ day, data, selTB, setSelTB }) => {
  const timeBefore = 'timeblock timeBefore';
  const timeAfter = 'timeblock timeAfter';

  return (
    <div className="oneday">
      <h3>{day}</h3>
      {data.map((TBinfo, item) => (
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
