import React, { useState, useEffect } from 'react';
import '../style/generalCss.css';
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './Caution/FloatPanel';
import SavePop from './Popup/SavePop';
import CleanSel from './Caution/CleanSel';
import CleanAll from './Caution/CleanAll';
import MemoPanel from './Caution/MemoPanel';
import { timeblockDataContext } from '../contexts/contexts';
import firebase, { memberData } from '../firebaseInit';

const IndexPage = () => {
  const [tab, setTab] = useState('edit');
  const [userId, setUserId] = useState('');
  const [reRender, setReRender] = useState(1);
  const [caution, setCaution] = useState(false);
  const [caCaution, setCACaution] = useState(false);
  const [sidepanel, setSidePanel] = useState(true);
  const [eventText, setEventText] = useState([
    { content: 'WORK OUT', color: '#66D1F2', id: Math.random() },
    { content: 'MEAL', color: '#F2C72D', id: Math.random() },
    { content: 'SLEEP', color: '#8B8B8B', id: Math.random() },
  ]);
  const [tbData, setTbData] = useState({
    MON: [],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
    SAT: [],
    SUN: [],
  });
  const [memo, setMemo] = useState([]);
  const [selTB, setSelTB] = useState([]);
  const [selEvent, setSelEvent] = useState({});
  const contextObject = {
    tbData,
    reRender,
    eventText,
    selTB,
    setTbData,
    setReRender,
    setSelEvent,
    setSelTB,
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        memberData
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setTbData(doc.data());
            } else {
              console.log('No such document!');
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
          });
      } else {
        const tbDataPush = (week, i) => {
          tbData[week].push({
            time: i,
            event: '',
            color: '#F4F4F4',
            week,
          });
        };
        for (let i = 0; i < 24; i += 0.5) {
          tbDataPush('MON', i);
          tbDataPush('TUE', i);
          tbDataPush('WED', i);
          tbDataPush('THU', i);
          tbDataPush('FRI', i);
          tbDataPush('SAT', i);
          tbDataPush('SUN', i);
        }
        setReRender(reRender + 1);
      }
    });

    console.log('TBinfo', tbData);
  }, []);

  useEffect(() => {
    const updateTB = (week) => {
      for (let i = 0; i < selTB.length; i += 1) {
        const Item = selTB[i].split('-')[1] / 0.5;
        if (selTB[i].split('-')[0] === week) {
          tbData[week][Item].event = selEvent.event;
          tbData[week][Item].color = selEvent.color;
          setReRender(reRender + 1);
        }
      }
    };
    updateTB('MON');
    updateTB('TUE');
    updateTB('WED');
    updateTB('THU');
    updateTB('FRI');
    updateTB('SAT');
    updateTB('SUN');
  }, [selEvent]);

  useEffect(() => {
    setSelEvent({});
    setSelTB([]);
  }, [reRender]);

  const handleHotKey = (e) => {
    if (e.keyCode === 8 || e.keyCode === 68) {
      const delTB = (List, Week, TB) => {
        for (let i = 0; i < List.length; i += 1) {
          if (List[i].split('-')[0] === Week) {
            const index = parseFloat(List[i].split('-')[1]) / 0.5;
            TB[index].event = '';
            TB[index].color = '#F4F4F4';
            setReRender(reRender + 1);
          }
        }
      };
      delTB(selTB, 'MON', tbData.MON);
      delTB(selTB, 'TUE', tbData.TUE);
      delTB(selTB, 'WED', tbData.WED);
      delTB(selTB, 'THU', tbData.THU);
      delTB(selTB, 'FRI', tbData.FRI);
      delTB(selTB, 'SAT', tbData.SAT);
      delTB(selTB, 'SUN', tbData.SUN);
    } else if (e.keyCode === 65) {
      setSidePanel(!sidepanel);
    }
  };

  return (
    <div
      className="entire"
      style={{ fontFamily: 'roboto, cursive' }}
      onKeyUp={handleHotKey}
      aria-hidden="true"
    >
      <timeblockDataContext.Provider value={contextObject}>
        {caution ? (
          <CleanSel setCaution={setCaution} selEvent={selEvent} setEventText={setEventText} />
        ) : (
          false
        )}
        {caCaution ? <CleanAll setCACaution={setCACaution} setSelTB={setSelTB} /> : false}
        <ArtBoard
          tab={tab}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
          userId={userId}
          setUserId={setUserId}
        />

        <SidePanel
          selEvent={selEvent}
          setSelEvent={setSelEvent}
          tab={tab}
          setTab={setTab}
          memo={memo}
          setMemo={setMemo}
          setCaution={setCaution}
          eventText={eventText}
          setEventText={setEventText}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
        />
        <SavePop />
        <FloatPanel setCACaution={setCACaution} />
      </timeblockDataContext.Provider>
      {memo.map((memoText) => (
        <MemoPanel memoText={memoText.content} dataId={memoText.id} memo={memo} setMemo={setMemo} />
      ))}
    </div>
  );
};

export default IndexPage;
