import React from 'react';

// css
import './artboard.css';

// component
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';

const ArtBoard = ({ TBdata, selTB, setSelTB }) => {
  console.log(TBdata);
  console.log('time', TBdata.time);
  return (
    <>
      <Nav />
      <div className="artboard">
        <TimeLine />
        <OneDay day="MON" data={TBdata.Monday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="TUE" data={TBdata.Tuesday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="WED" data={TBdata.Wednesday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="THU" data={TBdata.Thursday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="FRI" data={TBdata.Friday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="SAT" data={TBdata.Saturday} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="SUN" data={TBdata.Sunday} selTB={selTB} setSelTB={setSelTB} />
      </div>
    </>
  );
};

export default ArtBoard;
