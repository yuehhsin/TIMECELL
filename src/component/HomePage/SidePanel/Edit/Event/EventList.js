import React, { useState } from 'react';

import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

// component
import Event from './Event';
import EventForm from './EventForm';

const EventList = ({ selEvent, setSelEvent }) => {
  // HOOK
  const [inputValue, setInputValue] = useState(''); // 取得input值
  const [eventText, setEventText] = useState([
    { content: 'Learn React', color: '#DB4453', id: Math.random() },
  ]); // 建立event列表
  const [SP, setSP] = useState(true); // 開合視窗
  const handleSP = () => {
    setSP(!SP);
  };
  return (
    <>
      <div className="eventTit">
        <h4>EVENT</h4>
        <div
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
        />
      </div>
      <div style={SP ? { dispaly: 'flex' } : { display: 'none' }}>
        <div className="eventList">
          {eventText.map((event, item) => (
            <Event event={event} key={item} selEvent={selEvent} setSelEvent={setSelEvent} />
          ))}
        </div>
        <EventForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          eventText={eventText}
          setEventText={setEventText}
        />
      </div>
    </>
  );
};

export default EventList;
