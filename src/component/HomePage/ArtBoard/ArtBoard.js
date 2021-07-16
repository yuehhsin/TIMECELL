import React from 'react';

// css
import './artboard.css';

// component
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';

const ArtBoard = ({ TBdata, selTB, setSelTB }) => (
  <>
    <Nav />
    <div className="artboard">
      <TimeLine />
      <OneDay day="MON" data={TBdata.Monday} selTB={selTB} setSelTB={setSelTB} />
      <OneDay day="TUE" data={TBdata.Tuesday} />
      <OneDay day="WED" data={TBdata.Wednesday} />
      <OneDay day="THU" data={TBdata.Thursday} />
      <OneDay day="FRI" data={TBdata.Friday} />
      <OneDay day="SAT" data={TBdata.Saturday} />
      <OneDay day="SUN" data={TBdata.Sunday} />
    </div>
  </>
);

export default ArtBoard;
