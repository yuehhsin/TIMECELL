import React from 'react';

const Event = ({ event, setSelEvent }) => {
  const handleRenderTB = () => {
    setSelEvent({ color: event.color, event: event.content });
  };
  const handledrag = (e) => {
    console.log('drag me', e);
    setTimeout(() => {
      e.target.style.display = 'none';
    });
  };
  const handleDragEnd = (e) => {
    setTimeout(() => {
      e.target.style.display = 'flex';
    });
  };
  return (
    <button
      type="button"
      className="event"
      style={{ backgroundColor: event.color }}
      onClick={handleRenderTB}
      onDragStart={handledrag}
      onDragEnd={handleDragEnd}
      draggable="true"
    >
      <h5>{event.content}</h5>
      <div className="edit" />
    </button>
  );
};

export default Event;
