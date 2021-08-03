import React from 'react';

// css
import './artboard.css';

// component
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';

const ArtBoard = ({
  selTB,
  setSelTB,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
}) => (
  <>
    <Nav />
    <div className="artboard">
      <TimeLine />
      <OneDay day="MON" data={MONTB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="TUE" data={TUETB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="WED" data={WEDTB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="THU" data={THUTB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="FRI" data={FRITB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="SAT" data={SATTB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <OneDay day="SUN" data={SUNTB} selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
    </div>
  </>
);

export default ArtBoard;
