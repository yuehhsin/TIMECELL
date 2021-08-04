import React from 'react';

// component
import Timer from './Timer/Timer';
import EventList from './Event/EventList';

const Edit = ({
  selEvent,
  setSelEvent,
  setCaution,
  eventText,
  setEventText,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
  setReRender,
}) => (
  <>
    <Timer />
    <EventList
      selEvent={selEvent}
      setSelEvent={setSelEvent}
      setCaution={setCaution}
      eventText={eventText}
      setEventText={setEventText}
      MONTB={MONTB}
      TUETB={TUETB}
      WEDTB={WEDTB}
      THUTB={THUTB}
      FRITB={FRITB}
      SATTB={SATTB}
      SUNTB={SUNTB}
      reRender={reRender}
      setReRender={setReRender}
    />
  </>
);
export default Edit;
