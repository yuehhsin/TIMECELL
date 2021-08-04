import React, { useState, useEffect } from 'react';

// css
import './homepage.css';
// component
import ArtBoard from './ArtBoard/ArtBoard';
import SidePanel from './SidePanel/SidePanel';
import FloatPanel from './Popup/FloatPanel';
import AnalysisBoard from './AnalysisBoard/AnalysisBoard';
import Caution from './Caution/Caution';
import CleanACaution from './Caution/CleanACaution';
import SignPop from './Popup/SignPop/SignPop';

const HomePage = () => {
  // HOOK
  const [tab, setTab] = useState('edit'); // Tab切換
  const [caution, setCaution] = useState(false); // caution popup
  const [caCaution, setCACaution] = useState(false); // clean-all popup
  const [signPop, setSignPop] = useState(false); // signPop
  const [reRender, setReRender] = useState(1); // 重新render
  // HOOK: 整體資料
  const [eventText, setEventText] = useState([
    { content: 'KEEP GOING', color: '#36BC9B', id: Math.random() },
  ]); // firebase: EVENT資料
  const [MONTB, setMONTB] = useState([]); // firebase: MON資料
  const [TUETB, setTUETB] = useState([]); // firebase: TUE資料
  const [WEDTB, setWEDTB] = useState([]); // firebase: WED資料
  const [THUTB, setTHUTB] = useState([]); // firebase: THU資料
  const [FRITB, setFRITB] = useState([]); // firebase: FRI資料
  const [SATTB, setSATTB] = useState([]); // firebase: SAT資料
  const [SUNTB, setSUNTB] = useState([]); // firebase: SUN資料
  const [comment, setComment] = useState([]); // comment資訊列表
  // HOOK: 選取資料
  const [selTB, setSelTB] = useState([]); // 選取的時間塊位置 [MON-0,MON-2]
  const [selEvent, setSelEvent] = useState({}); // 選取的事件資訊  {color:red,event:"sleep",id:12345}

  // Take a try
  useEffect(() => {
    const Time = [];
    const monDataTB = [];
    const tueDataTB = [];
    const wedDataTB = [];
    const thuDataTB = [];
    const friDataTB = [];
    const satDataTB = [];
    const sunDataTB = [];
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`MON-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`TUE-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`WED-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`THU-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`FRI-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`SAT-${i}`);
    }
    for (let i = 0; i < 24; i += 0.5) {
      Time.push(`SUN-${i}`);
    }

    for (let n = 0; n < 48; n += 1) {
      const weekNtime = Time[n].split('-');
      monDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 48; n < 96; n += 1) {
      const weekNtime = Time[n].split('-');
      tueDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 96; n < 144; n += 1) {
      const weekNtime = Time[n].split('-');
      wedDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 144; n < 192; n += 1) {
      const weekNtime = Time[n].split('-');
      thuDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 192; n < 240; n += 1) {
      const weekNtime = Time[n].split('-');
      friDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 240; n < 288; n += 1) {
      const weekNtime = Time[n].split('-');
      satDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    for (let n = 288; n < 336; n += 1) {
      const weekNtime = Time[n].split('-');
      sunDataTB.push({
        week: weekNtime[0],
        time: parseFloat(weekNtime[1]),
        color: '#F4F4F4',
        event: '',
      });
    }
    setMONTB(monDataTB);
    setTUETB(tueDataTB);
    setWEDTB(wedDataTB);
    setTHUTB(thuDataTB);
    setFRITB(friDataTB);
    setSATTB(satDataTB);
    setSUNTB(sunDataTB);
    console.log('MONTB', monDataTB);
  }, []);

  // 下載資料庫時間塊資料 //又爆掉了
  // useEffect(() => {
  //   // MON TB
  //   const MonData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'MON')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setMONTB(list);
  //       });
  //   };
  //   MonData();
  //   // TUE TB
  //   const TueData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'TUE')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setTUETB(list);
  //       });
  //   };
  //   TueData();
  //   // WED TB
  //   const WedData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'WED')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setWEDTB(list);
  //       });
  //   };
  //   WedData();
  //   // THU TB
  //   const ThuData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'THU')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setTHUTB(list);
  //       });
  //   };
  //   ThuData();
  //   // FRI TB
  //   const FriData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'FRI')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setFRITB(list);
  //       });
  //   };
  //   FriData();
  //   // SAT TB
  //   const SatData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'SAT')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setSATTB(list);
  //       });
  //   };
  //   SatData();
  //   // SUN TB
  //   const SunData = async () => {
  //     await memberData
  //       .doc('test@gmail.com')
  //       .collection('timeblockInfo')
  //       .where('week', '==', 'SUN')
  //       .orderBy('time', 'asc')
  //       .get()
  //       .then((querySnapshot) => {
  //         const list = [];
  //         querySnapshot.forEach((doc) => {
  //           list.push(doc.data());
  //         });
  //         setSUNTB(list);
  //       });
  //   };
  //   SunData();
  //   const downloadEvent = async () => {
  //     memberData
  //       .doc('test@gmail.com')
  //       .get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //           setEventText(doc.data().eventInfo);
  //         }
  //         console.log('downloadEvent', 'No such document!');
  //       })
  //       .catch((error) => {
  //         console.log('downloadEvent:', error);
  //       });
  //   };
  //   downloadEvent();
  // }, []);

  // udate TB
  useEffect(() => {
    for (let i = 0; i < selTB.length; i += 1) {
      const Item = selTB[i].split('-')[1] / 0.5;
      const monList = MONTB;
      const tueList = TUETB;
      const wedList = WEDTB;
      const thuList = THUTB;
      const friList = FRITB;
      const satList = SATTB;
      const sunList = SUNTB;
      if (selTB[i].split('-')[0] === 'MON') {
        monList[Item].color = selEvent.color;
        monList[Item].event = selEvent.event;
        setMONTB(monList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'TUE') {
        tueList[Item].color = selEvent.color;
        tueList[Item].event = selEvent.event;
        setTUETB(tueList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'WED') {
        wedList[Item].color = selEvent.color;
        wedList[Item].event = selEvent.event;
        setWEDTB(wedList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'THU') {
        thuList[Item].color = selEvent.color;
        thuList[Item].event = selEvent.event;
        setTHUTB(thuList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'FRI') {
        friList[Item].color = selEvent.color;
        friList[Item].event = selEvent.event;
        setFRITB(friList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'SAT') {
        satList[Item].color = selEvent.color;
        satList[Item].event = selEvent.event;
        setSATTB(satList);
        setReRender(reRender + 1);
      } else if (selTB[i].split('-')[0] === 'SUN') {
        sunList[Item].color = selEvent.color;
        sunList[Item].event = selEvent.event;
        setSUNTB(sunList);
        setReRender(reRender + 1);
      }
    }
  }, [selEvent]);

  useEffect(() => {
    setSelEvent({});
    setSelTB([]);
  }, [reRender]);

  return (
    <div
      className="entire"
      style={{ fontFamily: 'roboto, cursive' }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {signPop ? <SignPop setSignPop={setSignPop} /> : false}
      {caution ? (
        <Caution
          setCaution={setCaution}
          selEvent={selEvent}
          eventText={eventText}
          setEventText={setEventText}
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
      {tab === 'edit' ? (
        <ArtBoard
          selTB={selTB}
          setSelTB={setSelTB}
          tab={tab}
          reRender={reRender}
          MONTB={MONTB}
          TUETB={TUETB}
          WEDTB={WEDTB}
          THUTB={THUTB}
          FRITB={FRITB}
          SATTB={SATTB}
          SUNTB={SUNTB}
          setSignPop={setSignPop}
        />
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
        setCaution={setCaution}
        eventText={eventText}
        setEventText={setEventText}
        MONTB={MONTB}
        TUETB={TUETB}
        WEDTB={WEDTB}
        THUTB={THUTB}
        FRITB={FRITB}
        SATTB={SATTB}
        SUNTB={SUNTB}
        reRender={reRender}
        setReRender={setReRender}
      />
      <FloatPanel
        selTB={selTB}
        setCACaution={setCACaution}
        MONTB={MONTB}
        TUETB={TUETB}
        WEDTB={WEDTB}
        THUTB={THUTB}
        FRITB={FRITB}
        SATTB={SATTB}
        SUNTB={SUNTB}
        reRender={reRender}
        setReRender={setReRender}
      />
    </div>
  );
};

export default HomePage;
