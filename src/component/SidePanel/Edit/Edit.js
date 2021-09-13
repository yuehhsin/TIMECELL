// X
import React from 'react';

// component
import Timer from './Timer/Timer';
import EventList from './Event/EventList';
import Memo from './Memo/Memo';
import Statistic from './Statistic/Statistic';

const Edit = ({
  selEvent,
  setSelEvent,
  setCaution,
  eventText,
  setEventText,
  reRender,
  setReRender,
  memo,
  setMemo,
}) => (
  <>
    <Timer />
    <EventList
      selEvent={selEvent}
      setSelEvent={setSelEvent}
      setCaution={setCaution}
      eventText={eventText}
      setEventText={setEventText}
      reRender={reRender}
      setReRender={setReRender}
    />
    <Memo memo={memo} setMemo={setMemo} />
    <Statistic eventText={eventText} />
  </>
);
export default Edit;
