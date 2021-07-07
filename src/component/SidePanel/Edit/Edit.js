import React from "react";
import { useState } from "react";

//component
import Style from "./Style/Style";
import EventList from "./Event/EventList";
import RoutineList from "./Routine/RoutineList";

const Edit = () => {
  const [SP, setSP] = useState(true); //開合視窗
  const handleSP = () => {
    setSP(!SP);
  };

  return (
    <>
      <Style />
      <EventList />
      <RoutineList SP={SP} handleSP={handleSP} />
    </>
  );
};

export default Edit;
