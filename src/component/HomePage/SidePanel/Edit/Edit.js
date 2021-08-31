// X
import React from 'react';

// component
import Timer from './Timer/Timer';
import EventList from './Event/EventList';
import Memo from './Memo/Memo';
import Statistic from './Statistic/Statistic';
import Hotkey from './Hotkey/Hotkey';

const Edit = ({
  selEvent,
  setSelEvent,
  setCaution,
  eventText,
  setEventText,
  reRender,
  setReRender,
  comment,
  setComment,
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
    <Memo comment={comment} setComment={setComment} />
    {/* <Statistic eventText={eventText} /> */}
    <Hotkey />
  </>
);
export default Edit;
