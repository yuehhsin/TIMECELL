import React, { useState } from 'react';
import styled from 'styled-components';
import Doughnuts from './Doughnut';
import Title, { ColBTN } from '../../../../../Style/shareStyled';

const Statistic = ({ eventText, MONTB, TUETB, WEDTB, THUTB, FRITB, SATTB, SUNTB }) => {
  // HOOK
  const [SP, setSP] = useState(true);
  const [selDay, selSelDay] = useState('WEEK'); // dropdown value
  const handleSP = () => {
    setSP(!SP);
  };
  const handleSelect = (e) => {
    selSelDay(e.target.value);
  };

  return (
    <>
      <Title>
        <h4>STATISTIC</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>
      <StatisticContainer colSty={SP}>
        <SelDay name="day" onChange={handleSelect}>
          <option value="WEEK">WEEK</option>
          <option value="MON">MON</option>
          <option value="TUE">TUE</option>
          <option value="WED">WED</option>
          <option value="THU">THU</option>
          <option value="FRI">FRI</option>
          <option value="SAT">SAT</option>
          <option value="SUN">SUN</option>
        </SelDay>
        <Doughnuts
          eventText={eventText}
          MONTB={MONTB}
          TUETB={TUETB}
          WEDTB={WEDTB}
          THUTB={THUTB}
          FRITB={FRITB}
          SATTB={SATTB}
          SUNTB={SUNTB}
          selDat={selDay}
        />
      </StatisticContainer>
    </>
  );
};
export default Statistic;

// STYLE
const StatisticContainer = styled.div`
  display: ${(props) => (props.colSty ? 'block' : 'none')};
  width: 100%;
  height: 200px;
  position: absolute;
`;
const SelDay = styled.select`
  background-color: #383838;
  height: 30px;
  padding: 5px 8px 5px 8px;
  margin-left: 20px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  z-index: 1;
  outline: none;
  text-align: center;
  &:hover {
    background-color: #464646;
    cursor: pointer;
  }
`;
