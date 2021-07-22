import React, { useState, useEffect } from 'react';
import { memberData } from '../../firebaseInit';

// scss
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './FloatPanel/FloatPanel';

const HomePage = () => {
  // HOOK
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [Mon-0,Mon-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep"}
  const [reRender, setReRender] = useState(1); // 重新render

  // 重新下載資料庫指令
  useEffect(() => {
    setReRender(reRender + 1);
  }, []);

  // 更新資料庫
  useEffect(() => {
    const updateData = async (where) => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .doc(where)
        .update({
          event: selEvent.event,
          color: selEvent.color,
        })
        .then(() => {
          setReRender(reRender + 1);
          setSelTB([]);
          setSelEvent([]);
        })
        .catch(() => {
          console.log('updateError');
        });
    };
    for (let i = 0; i < selTB.length; i += 1) {
      updateData(selTB[i]);
    }
  }, [selEvent]);

  return (
    <div className="entire" style={{ fontFamily: 'roboto mono, cursive' }}>
      <ArtBoard selTB={selTB} setSelTB={setSelTB} reRender={reRender} />
      <SidePanel selEvent={selEvent} setSelEvent={setSelEvent} />
      <FloatPanel selTB={selTB} reRender={reRender} setReRender={setReRender} setSelTB={setSelTB} />
    </div>
  );
};

export default HomePage;
