import React from 'react';
import styled from 'styled-components';

const TimeLine = () => (
  <TimeScope>
    <Time>0:00</Time>
    <Time>1:00</Time>
    <Time>2:00</Time>
    <Time>3:00</Time>
    <Time>4:00</Time>
    <Time>5:00</Time>
    <Time>6:00</Time>
    <Time>7:00</Time>
    <Time>8:00</Time>
    <Time>9:00</Time>
    <Time>10:00</Time>
    <Time>11:00</Time>
    <Time>12:00</Time>
    <Time>13:00</Time>
    <Time>14:00</Time>
    <Time>15:00</Time>
    <Time>16:00</Time>
    <Time>17:00</Time>
    <Time>18:00</Time>
    <Time>19:00</Time>
    <Time>20:00</Time>
    <Time>21:00</Time>
    <Time>22:00</Time>
    <Time>23:00</Time>
  </TimeScope>
);

export default TimeLine;

// STYLE
const TimeScope = styled.div`
  padding: 45px 30px 0px 0px;
  user-select: none;
`;
const Time = styled.div`
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9.5px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2px;
`;
