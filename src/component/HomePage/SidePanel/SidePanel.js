import React, { useState, useEffect } from 'react';

// compponent
import Edit from './Edit/Edit';
import Statistic from './Statistic/Statistic';
import Tab from './Tab';

const SidePanel = ({ selEvent, setSelEvent }) => {
  // hook
  useEffect(() => {
    document.querySelector('.sidepanel').style.height = `${document.body.clientHeight}px`;
  });
  const [tab, setTab] = useState('edit');
  return (
    <div className="sidepanel">
      <Tab tab={tab} setTab={setTab} />
      {tab === 'edit' ? <Edit selEvent={selEvent} setSelEvent={setSelEvent} /> : <Statistic />}
      <div className="info" />
    </div>
  );
};

export default SidePanel;
