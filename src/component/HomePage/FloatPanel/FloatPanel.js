import React, { useEffect, useState } from 'react';
import 'animate.css';

// eslint-disable-next-line object-curly-newline

const FloatPanel = ({ selTB, setCACaution }) => {
  const selTime = `Select  ${selTB.length * 0.5}  Hour`;
  const floatpanel =
    selTB.length === 0 ? 'hidden' : 'floatpanel animate__animated animate__fadeInUp';

  // function cleanAll(List) {
  //   for (let i = 0; i < List.length; i += 1) {
  //     List[i].color = '#F4F4F4';
  //     List[i].event = ' ';
  //   }
  // }

  const handleDelAll = () => {
    setCACaution(true);
    // const monList = MONTB;
    // const tueList = TUETB;
    // const wedList = WEDTB;
    // const thuList = THUTB;
    // const friList = FRITB;
    // const satList = SATTB;
    // const sunList = SUNTB;
    // cleanAll(monList);
    // cleanAll(tueList);
    // cleanAll(wedList);
    // cleanAll(thuList);
    // cleanAll(friList);
    // cleanAll(satList);
    // cleanAll(sunList);
    // setMONTB(monList);
    // setReRender(reRender + 1);
  };

  return (
    <div className={floatpanel}>
      <h5>{selTime}</h5>
      <div className="claenEvent" />
      <div className="cleanPanel">
        <h5 className="cleanH5Top">CLEAN ONE</h5>
        <h5 className="cleanH5BTM" onClick={handleDelAll}>
          CLEAN ALL
        </h5>
      </div>
    </div>
  );
};
export default FloatPanel;
