import React, { useEffect, useState } from 'react';
import { memberData } from '../../../firebaseInit';

// css
import './artboard.css';

// component
import OneDay from './OneDay/OneDay';
import TimeLine from './TimeLine';
import Nav from './Nav';

const ArtBoard = ({ selTB, setSelTB, reRender }) => {
  // HOOK
  const [MONTB, setMONTB] = useState([]);
  const [TUETB, setTUETB] = useState([]);
  const [WEDTB, setWEDTB] = useState([]);
  const [THUTB, setTHUTB] = useState([]);
  const [FRITB, setFRITB] = useState([]);
  const [SATTB, setSATTB] = useState([]);
  const [SUNTB, setSUNTB] = useState([]);

  useEffect(() => {  //先不使用~~~
    // 下載資料庫時間塊資料
    // MON TB
    const MonData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'MON')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setMONTB(list);
        });
    };
    MonData();
    // TUE TB
    const TueData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'TUE')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setTUETB(list);
        });
    };
    TueData();
    // WED TB
    const WedData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'WED')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setWEDTB(list);
        });
    };
    WedData();
    // THU TB
    const ThuData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'THU')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setTHUTB(list);
        });
    };
    ThuData();
    // FRI TB
    const FriData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'FRI')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setFRITB(list);
        });
    };
    FriData();
    // SAT TB
    const SatData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'SAT')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setSATTB(list);
        });
    };
    SatData();
    // SUN TB
    const SunData = async () => {
      await memberData
        .doc('test@gmail.com')
        .collection('timeblockInfo')
        .where('week', '==', 'SUN')
        .orderBy('time', 'asc')
        .get()
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
          setSUNTB(list);
        });
    };
    SunData();
  }, [reRender]);

  return (
    <>
      <Nav />
      <div className="artboard">
        <TimeLine />
        <OneDay day="MON" data={MONTB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="TUE" data={TUETB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="WED" data={WEDTB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="THU" data={THUTB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="FRI" data={FRITB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="SAT" data={SATTB} selTB={selTB} setSelTB={setSelTB} />
        <OneDay day="SUN" data={SUNTB} selTB={selTB} setSelTB={setSelTB} />
      </div>
    </>
  );
};

export default ArtBoard;
