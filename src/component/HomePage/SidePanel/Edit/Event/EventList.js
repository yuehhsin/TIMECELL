import React, { useEffect, useState } from 'react';
import { memberData } from '../../../../../firebaseInit';

import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

// component
import Event from './Event';
import EventForm from './EventForm';

const EventList = ({ selEvent, setSelEvent }) => {
  // HOOK
  const [inputValue, setInputValue] = useState(''); // 取得input值
  const [eventText, setEventText] = useState([
    { content: 'default-1', color: 'default', id: Math.random() },
    { content: 'default-2', color: 'default', id: Math.random() },
  ]); // 建立event列表
  const [SP, setSP] = useState(true); // 開合視窗
  const handleSP = () => {
    setSP(!SP);
  };
  useEffect(() => {
    const downloadEvent = async () => {
      memberData
        .doc('test@gmail.com')
        .get()
        .then((doc) => {
          if (doc.exists) {
            setEventText(doc.data().eventInfo);
          }
          console.log('No such document!');
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    };
    downloadEvent();
  }, []);

  memberData
    .orderBy('eventInfo')
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

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
