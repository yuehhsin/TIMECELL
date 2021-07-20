import React, { useState } from 'react';
import { DB } from '../../firebaseInit';
// scss
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './FloatPanel/FloatPanel';

// const goDate = true;
const HomePage = () => {
  // HOOK
  const [TBdata, setTBdata] = useState({}); // 資料庫中時間塊的資料
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [Mon-0,Mon-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep"}

  // TEST
  const museums = DB.collectionGroup('timeblockInfo');
  museums.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setTBdata({ [doc.id]: doc.data() });
    });
  });
  console.log('TBdata', TBdata);
  return (
    <div className="entire" style={{ fontFamily: 'roboto mono, cursive' }}>
      <ArtBoard TBdata={TBdata} selTB={selTB} setSelTB={setSelTB} />
      <SidePanel selEvent={selEvent} setSelEvent={setSelEvent} />
      <FloatPanel />
    </div>
  );
};

export default HomePage;
