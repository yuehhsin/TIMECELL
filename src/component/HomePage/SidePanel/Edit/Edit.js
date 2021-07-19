import React, { useState } from 'react';

// component
import Style from './Style/Style';
import EventList from './Event/EventList';
import RoutineList from './Routine/RoutineList';

const Edit = ({ selEvent, setSelEvent }) => {
  const [SP, setSP] = useState(true); // 開合視窗
  const handleSP = () => {
    setSP(!SP);
  };

  return (
    <>
      <Style />
      <EventList selEvent={selEvent} setSelEvent={setSelEvent} />
      <RoutineList SP={SP} handleSP={handleSP} />
    </>
  );
};

export default Edit;
