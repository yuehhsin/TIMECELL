import React from "react";
import { useState } from "react";

const TimeAfter = ({ selTime, SetSelTime }) => {
  const [timeState, setTimeState] = useState("A"); //state: A:未選取 B:選取 C:已填入事件
  const handleTimeState = (e) => {
    if (timeState === "A") {
      setTimeState("B");
      e.target.classList.add("timeSel");
    } else if (timeState === "B") {
      setTimeState("A");
      e.target.classList.remove("timeSel");
    }
  };

  return <div className="timeblock timeAfter" onClick={handleTimeState}></div>;
};
export default TimeAfter;
