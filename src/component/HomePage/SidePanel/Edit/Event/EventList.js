import React, { useState } from 'react';
import styled from 'styled-components';
import Title, { ColBTN, Container } from '../../../../../Style/shareStyled';
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
      <Title>
        <h4>EVENT</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>
      <Container colSty={SP}>
        <Eventlist
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
        </Eventlist>
        <EventForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          eventText={eventText}
          setEventText={setEventText}
        />
      </Container>
    </>
  );
};

export default EventList;

// STYLE
const Eventlist = styled.div`
  padding: 0px 20px 0px 20px;
`;
