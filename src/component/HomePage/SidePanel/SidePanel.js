import React from 'react';

// compponent
import Edit from './Edit/Edit';
import Developer from './Developer/Developer';
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
  <div className="sidepanel">
    <Tab tab={tab} setTab={setTab} />
    {tab === 'edit' ? (
      <Edit
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
        comment={comment}
        setComment={setComment}
      />
    ) : (
      <Developer />
    )}
  </div>
);

export default SidePanel;
