import React, { useState } from 'react';

// component
import Style from './Style/Style';
import EventList from './Event/EventList';

const Edit = ({ selEvent, setSelEvent, setCaution, eventText, setEventText }) => (
  <>
    <Style />
    <EventList
      selEvent={selEvent}
      setSelEvent={setSelEvent}
      setCaution={setCaution}
      eventText={eventText}
      setEventText={setEventText}
    />
  </>
);
export default Edit;
