import React from 'react';

// compponent
import Edit from './Edit/Edit';
import Analysis from './Analysis/Analysis';
import Tab from './Tab';

const SidePanel = ({
  selEvent,
  setSelEvent,
  tab,
  setTab,
  comment,
  setComment,
  setCaution,
  eventText,
  setEventText,
}) => (
  <div className="sidepanel">
    <Tab tab={tab} setTab={setTab} />
    {tab === 'edit' ? (
      <Edit
        selEvent={selEvent}
        setSelEvent={setSelEvent}
        setCaution={setCaution}
        eventText={eventText}
        setEventText={setEventText}
      />
    ) : (
      <Analysis comment={comment} setComment={setComment} />
    )}
    <div className="info" />
  </div>
);

export default SidePanel;
