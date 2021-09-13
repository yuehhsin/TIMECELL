import React from 'react';
import styled from 'styled-components';
import TimeBlock from './TimeBlock';

const OneDay = ({ day, data, mouseDown }) => (
  <Oneday>
    <h3>{day}</h3>
    {data.map((TBinfo, item) => (
      <TimeBlock
        key={item}
        timeBefore={item % 2 === 0}
        TBinfo={TBinfo}
        dataSet={`${day}-${0.5 * item}`}
        mouseDown={mouseDown}
      />
    ))}
  </Oneday>
);

export default OneDay;

// STYLE
const Oneday = styled.div`
  margin-right: 20px;
  user-select: none;
  & h3 {
    text-align: center;
    margin: 0px 0px 20px 0px;
  }
`;
