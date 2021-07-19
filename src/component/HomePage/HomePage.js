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
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [Mon-0,Mon-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep"}
  memberData
    .doc('t@gmail.com')
    .get()
    .then((doc) => {
      if (doc.exists && goDate == true) {
        setTBdata(doc.data());
        goDate = false;
      } else {
        console.log('No such document! or Document already exist');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  // 搜尋資料庫特定資料
  // memberData
  //   .doc('t@gmail.com')
  //   .where('Friday')
  //   .get()
  //   .then((querySnapshot) => {
  //     console.log(querySnapshot);
  //   })
  //   .catch((error) => {
  //     console.log('Error getting documents: ', error);
  //   });

  console.log('selEvent', selEvent);
  console.log('selTB', selTB);
  return (
    <div className="entire" style={{ fontFamily: 'roboto mono, cursive' }}>
      <ArtBoard TBdata={TBdata} selTB={selTB} setSelTB={setSelTB} />
      <SidePanel selEvent={selEvent} setSelEvent={setSelEvent} />
      <FloatPanel />
    </div>
  );
};

export default HomePage;
