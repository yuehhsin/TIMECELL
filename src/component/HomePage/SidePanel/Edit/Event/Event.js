import React from 'react';

const Event = ({ event, selEvent, setSelEvent }) => {
  const handleRenderTB = () => {
    setSelEvent({ color: event.color, event: event.content });
  };
  return (
    <div className="event" style={{ backgroundColor: event.color }} onClick={handleRenderTB}>
      <h5>{event.content}</h5>
      <div className="edit" />
    </div>
  );
};

export default Event;
