import React from "react";

//component
import TimeAfter from "./TimeAfter";
import TimeBefore from "./TimeBefore";

const OneDay = ({ day, selTime, SetSelTime }) => {
  return (
    <div className="oneday">
      <h3>{day}</h3>
      <TimeBefore selTime={selTime} SetSelTime={SetSelTime} />
      <TimeAfter selTime={selTime} SetSelTime={SetSelTime} />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <div className="block" />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
      <TimeBefore />
      <TimeAfter />
    </div>
  );
};

export default OneDay;
