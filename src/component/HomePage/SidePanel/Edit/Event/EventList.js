import React, { useState } from 'react';

import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

// component
import Event from './Event';
import EventForm from './EventForm';

const EventList = ({
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
}) => {
  // HOOK
  const [inputValue, setInputValue] = useState(''); // 取得input值
  const [SP, setSP] = useState(true); // 開合視窗
  const [dragTarget, setDragTarget] = useState({}); // 拖曳的目標

  const handleSP = () => {
    setSP(!SP);
  };
  return (
    <>
      <div className="eventTit">
        <h4>EVENT</h4>
        <button
          type="button"
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
          aria-label="collapse"
        />
      </div>
      <div style={SP ? { dispaly: 'flex' } : { display: 'none' }}>
        <div
          className="eventList"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragEnter={(e) => {
            e.preventDefault();
          }}
          onDrop={() => {
            console.log('drop');
          }}
        >
          {eventText.map((event, item) => (
            <Event
              event={event}
              key={item.id}
              selEvent={selEvent}
              setSelEvent={setSelEvent}
              item={item}
              eventText={eventText}
              setEventText={setEventText}
              setCaution={setCaution}
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
