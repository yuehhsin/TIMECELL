import React, { useState, useEffect } from 'react';
import { memberData } from '../../firebaseInit';

// css
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './FloatPanel/FloatPanel';
import AnalysisBoard from './AnalysisBoard/AnalysisBoard';

const HomePage = () => {
  // HOOK
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [Mon-0,Mon-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep"}
  const [reRender, setReRender] = useState(1); // 重新render
  const [tab, setTab] = useState('edit'); // edit analysis Tab切換
  const [comment, setComment] = useState([]); // comment資訊列表

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
  console.log('comment', comment);
  return (
    <div className="entire" style={{ fontFamily: 'roboto, cursive' }}>
      {tab === 'edit' ? (
        <ArtBoard selTB={selTB} setSelTB={setSelTB} reRender={reRender} tab={tab} />
      ) : (
        <AnalysisBoard comment={comment} />
      )}
      <SidePanel
        selEvent={selEvent}
        setSelEvent={setSelEvent}
        tab={tab}
        setTab={setTab}
        comment={comment}
        setComment={setComment}
      />
      <FloatPanel selTB={selTB} reRender={reRender} setReRender={setReRender} setSelTB={setSelTB} />
    </div>
  );
};

export default HomePage;
