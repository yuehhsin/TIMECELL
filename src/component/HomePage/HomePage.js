import React, { useState, useEffect } from 'react';
import '../../Style/generalCss.css';
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './Popup/FloatPanel';
import SavePop from './Popup/SavePop';
import Caution from './Caution/Caution';
import CleanACaution from './Caution/CleanACaution';
import SignPop from './Popup/SignPop/SignPop';
import MemoPop from './Popup/MemoPop';
import WelcomePop from './Popup/WelcomePop';
import { timeblockDataContext } from '../contexts';

const HomePage = () => {
  // HOOK
  const [tab, setTab] = useState('edit'); // Tab切換
  const [UUID, setUUID] = useState('');
  const [caution, setCaution] = useState(false); // caution popup
  const [caCaution, setCACaution] = useState(false); // clean-all popup
  const [signPop, setSignPop] = useState(false); // signPop
  const [welcomePop, setWelcomePop] = useState(true); // welcomePop
  const [reRender, setReRender] = useState(1); // 重新render
  const [sidepanel, setSidePanel] = useState(true); // sidepane display
  const [save, setSave] = useState(false);
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
  const [MONTB, setMONTB] = useState([]); // firebase: MON資料
  const [TUETB, setTUETB] = useState([]); // firebase: TUE資料
  const [WEDTB, setWEDTB] = useState([]); // firebase: WED資料
  const [THUTB, setTHUTB] = useState([]); // firebase: THU資料
  const [FRITB, setFRITB] = useState([]); // firebase: FRI資料
  const [SATTB, setSATTB] = useState([]); // firebase: SAT資料
  const [SUNTB, setSUNTB] = useState([]); // firebase: SUN資料
  const [comment, setComment] = useState([]); // comment資訊列表
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [MON-0,MON-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep",id:12345}

  useEffect(() => {
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

  return (
    <timeblockDataContext.Provider value={contextObject}>
      <div className="entire" style={{ fontFamily: 'roboto, cursive' }} onKeyUp={handleHotKey}>
        {welcomePop ? <WelcomePop setWelcomePop={setWelcomePop} /> : false}
        {signPop ? <SignPop setSignPop={setSignPop} UUID={UUID} setUUID={setUUID} /> : false}
        {caution ? (
          <Caution
            setCaution={setCaution}
            selEvent={selEvent}
            eventText={eventText}
            setEventText={setEventText}
            MONTB={MONTB}
            TUETB={TUETB}
            WEDTB={WEDTB}
            THUTB={THUTB}
            FRITB={FRITB}
            SATTB={SATTB}
            SUNTB={SUNTB}
          />
        ) : (
          false
        )}
        {caCaution ? (
          <CleanACaution
            setCACaution={setCACaution}
            setSelTB={setSelTB}
            MONTB={MONTB}
            TUETB={TUETB}
            WEDTB={WEDTB}
            THUTB={THUTB}
            FRITB={FRITB}
            SATTB={SATTB}
            SUNTB={SUNTB}
            setMONTB={setMONTB}
            setTUETB={setTUETB}
            setWEDTB={setWEDTB}
            setTHUTB={setTHUTB}
            setFRITB={setFRITB}
            setSATTB={setSATTB}
            setSUNTB={setSUNTB}
            reRender={reRender}
            setReRender={setReRender}
          />
        ) : (
          false
        )}
        <ArtBoard
          tab={tab}
          setSignPop={setSignPop}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
          UUID={UUID}
          setUUID={setUUID}
          setSave={setSave}
          save={save}
        />
        {comment.map((commentText) => (
          <MemoPop
            commentText={commentText.content}
            dataId={commentText.id}
            comment={comment}
            setComment={setComment}
          />
        ))}
        <SidePanel
          selEvent={selEvent}
          setSelEvent={setSelEvent}
          tab={tab}
          setTab={setTab}
          comment={comment}
          setComment={setComment}
          setCaution={setCaution}
          eventText={eventText}
          setEventText={setEventText}
          sidepanel={sidepanel}
          setSidePanel={setSidePanel}
        />
        <FloatPanel setCACaution={setCACaution} />
        {save ? <SavePop setSave={setSave} /> : false}
      </div>
    </timeblockDataContext.Provider>
  );
};

export default HomePage;
