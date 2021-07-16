import React, { useState } from 'react';
import { memberData } from '../../firebaseInit';
// scss
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './FloatPanel/FloatPanel';

let goDate = true;
const HomePage = () => {
  // HOOK
  const [TBdata, setTBdata] = useState({}); // 資料庫中時間塊的資料
  const [selTB, setSelTB] = useState(['data']); // 選取的時間塊列表
  memberData
    .doc('t@gmail.com')
    .get()
    .then((doc) => {
      if (doc.exists && goDate === true) {
        setTBdata(doc.data());
        goDate = false;
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  return (
    <div className="entire" style={{ fontFamily: 'roboto mono, cursive' }}>
      <ArtBoard TBdata={TBdata} selTB={selTB} setSelTB={setSelTB} />
      <SidePanel />
      <FloatPanel />
    </div>
  );
};

export default HomePage;
