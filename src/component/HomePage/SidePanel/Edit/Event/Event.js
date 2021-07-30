import React, { useState } from 'react';

const Event = ({ event, setSelEvent, eventText, setEventText, item }) => {
  // HOOK
  const [menu, setMenu] = useState(false); // menu視窗
  const [edit, handleEdit] = useState(false); // edit視窗
  const [eventEdit, handleMenuEdit] = useState(''); // edit onchang

  const handleRenderTB = () => {
    setSelEvent({ color: event.color, event: event.content });
  };
  const handledrag = (e) => {
    setTimeout(() => {
      e.target.style.display = 'none';
    });
  };
  const handleDragEnd = (e) => {
    setTimeout(() => {
      e.target.style.display = 'flex';
      e.target = null;
    });
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleEditPanel = () => {
    handleEdit(true);
    handleMenuEdit(event.content);
  };
  const handleEventEdit = (e) => {
    console.log('target', e.target);
    handleMenuEdit(e.target.value);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (eventEdit !== '') {
      const updateEventText = eventText;
      updateEventText[item].content = eventEdit;
      handleMenuEdit('');
      setEventText(updateEventText);
      handleEdit(false);
    }
  };
  return (
    <div className="btnScope">
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
        <button type="button" className="menuIcon" onClick={handleMenu} aria-label="menu-window" />
      </button>
      <form hidden={!edit} onSubmit={handleEditSubmit}>
        <input
          className="eventEdit"
          type="text"
          style={{ backgroundColor: event.color, textIndent: '20px' }}
          onChange={handleEventEdit}
          value={eventEdit}
        />
        <button type="submit" className="eventEditSubmit" aria-label="eventEdit-submit" />
      </form>
      <button type="button" className={menu ? 'nosee' : 'hidden'} onClick={handleCloseMenu}>
        <div className="menuPanel">
          <h5 className="menuEdit" onClick={handleEditPanel}>
            EDIT
          </h5>
          <h5>DELETE</h5>
        </div>
      </button>
    </div>
  );
};

export default Event;
