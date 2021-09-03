import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title, { ColBTN, Container } from '../../../../style/shareStyled';
import timedot from '../../../../icon/timedot.png';
import 'animate.css';

const Timer = () => {
  // HOOK
  const [SP, setSP] = useState(true);
  const [time, setTime] = useState('0000');
  const handleSP = () => {
    setSP(!SP);
  };

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      let getMin;
      let getSec;
      if (now.getSeconds() !== 0) {
        if (now.getMinutes() > 30) {
          getMin = 30 - (now.getMinutes() - 30) - 1;
        } else if (now.getMinutes() < 30) {
          getMin = 30 - now.getMinutes() - 1;
        }
        getSec = 60 - now.getSeconds();
      } else if (now.getSeconds() === 0) {
        if (now.getMinutes() > 30) {
          getMin = 30 - (now.getMinutes() - 30);
        }
        if (now.getMinutes() < 30) {
          getMin = 30 - now.getMinutes();
        }
        getSec = 0;
      }

      if (getMin || getSec) {
        const minutes = getMin < 10 ? `0${getMin}` : getMin.toString();
        const seconds = getSec < 10 ? `0${getSec}` : getSec.toString();
        setTime(minutes + seconds);
      }
    }, 1000);
  });

  return (
    <>
      <Title>
        <h4>TIMER</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>

      <Container colSty={SP}>
        <Time>
          <TimeBox className="animate__animated animate__headShake">{time[0]}</TimeBox>
          <TimeBox className="animate__animated animate__headShake">{time[1]}</TimeBox>
          <Timedot />
          <TimeBox className="animate__animated animate__headShake">{time[2]}</TimeBox>
          <TimeBox className="animate__animated animate__headShake">{time[3]}</TimeBox>
        </Time>
        <TimeInfo>
          <h6>MINUTES</h6>
          <h6>SECONDS</h6>
        </TimeInfo>
      </Container>
    </>
  );
};

export default Timer;

// STYLE
const Time = styled.div`
  padding: 0px 20px 14px 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
`;
const TimeInfo = styled.div`
  display: flex;
  padding: 0px 20px 0px 20px;
  justify-content: space-between;
  margin-bottom: 16px;
  & h6 {
    color: #fff;
    width: 90px;
    text-align: center;
    margin: 0px;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;
const Timedot = styled.div`
  width: 10px;
  background-image: url(${timedot});
  background-size: cover;
`;
const TimeBox = styled.div`
  padding: 20px 15px 20px 15px;
  background-color: #464646;
  border-radius: 5px;
`;
