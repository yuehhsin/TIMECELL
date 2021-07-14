import React, { useState } from 'react';

// scss
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './FloatPanel/FloatPanel';

const HomePage = () => {
  // HOOK
  const [selTime, setSelTime] = useState('selTime'); // 紀錄已選取的時間塊
  return (
    <div className="entire" style={{ fontFamily: 'roboto mono, cursive' }}>
      <ArtBoard selTime={selTime} setSelTime={setSelTime} />
      <SidePanel />
      <FloatPanel />
    </div>
  );
};

export default HomePage;
