import React, { useState, useEffect } from 'react';
import '../style/generalCss.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './Caution/FloatPanel';
import SaveCaution from './Caution/SaveCaution';
import CleanSel from './Caution/CleanSel';
import CleanAll from './Caution/CleanAll';
import MemoPanel from './Caution/MemoPanel';
import { timeblockDataContext } from '../contexts/contexts';
import firebase, { memberData } from '../firebaseInit';
import { InitialData } from './data/InitialData';

const IndexPage = () => {
  const [tab, setTab] = useState('edit');
  const [userId, setUserId] = useState('');
  const [reRender, setReRender] = useState(1);
  const [caution, setCaution] = useState(false);
  const [caCaution, setCACaution] = useState(false);
  const [saveCaution, setSaveCaution] = useState(false);
  const [sidepanel, setSidePanel] = useState(true);
  const [eventText, setEventText] = useState([
    { content: 'WORK OUT', color: '#66D1F2', id: Math.random() },
    { content: 'MEAL', color: '#F2C72D', id: Math.random() },
    { content: 'SLEEP', color: '#8B8B8B', id: Math.random() },
  ]);
  const [tbData, setTbData] = useState(InitialData);
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
  const history = useHistory();
  window.setInterval(() => {
    localStorage.setItem('temporaryData', JSON.stringify(tbData));
  }, 60000);

  useEffect(() => {
    console.log('cookie', document.cookie);
    if (document.cookie === '') {
      history.push('/welcome');
      document.cookie = 'welcome=Hi TIMECELL;max-age=2592000';
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUserId(user.uid);
          memberData
            .doc(user.uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setEventText(doc.data().events);
                setTbData(doc.data());
                delete tbData.events;
                setUserId(user.uid);
                if (doc.data().MON.length === 0) {
                  const temporaryData = JSON.parse(localStorage.getItem('temporaryData'));
                  setTbData(temporaryData);
                }
              } else {
                console.log('No such document!');
                const temporaryData = JSON.parse(localStorage.getItem('temporaryData'));
                setTbData(temporaryData);
              }
            })
            .catch((error) => {
              console.log('Error getting document:', error);
            });
        }
      });
    }
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
    if (e.shiftKey && e.keyCode === 65) {
      // shift + a
      setCACaution(true);
    } else if (e.keyCode === 220) {
      // \
      setSidePanel(!sidepanel);
    }
  };
  document.addEventListener('keyup', handleHotKey);
  const handleHotKeyDel = (e) => {
    if (e.keyCode === 8) {
      // backSpace
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
    }
  };

  return (
    <Entire onKeyUp={handleHotKeyDel}>
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
          setSaveCaution={setSaveCaution}
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
        {saveCaution ? <SaveCaution /> : false}
        <FloatPanel setCACaution={setCACaution} />
      </timeblockDataContext.Provider>
      {memo.map((memoText) => (
        <MemoPanel memoText={memoText.content} dataId={memoText.id} memo={memo} setMemo={setMemo} />
      ))}
    </Entire>
  );
};

export default IndexPage;

// Style
const Entire = styled.div`
  fontfamily: 'roboto, cursive';
  margin-bottom: 30px;
`;
