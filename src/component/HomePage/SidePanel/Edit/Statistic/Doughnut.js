import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.global.legend.display = false;
defaults.global.animation.duration = 10;

const Doughnuts = ({ eventText, MONTB, TUETB, WEDTB, THUTB, FRITB, SATTB, SUNTB, selDat }) => {
  const colorList = [];
  const monEventList = [];
  const monCounts = {};
  const monData = [];
  const MONDATA = [];
  let contentList = [];
  const dic = {};
  for (let i = 0; i < eventText.length; i += 1) {
    dic[eventText[i].content] = eventText[i].color;
  }

  const handleSelDay = (TB, num) => {
    for (let i = 0; i < TB.length; i += 1) {
      monEventList.push(TB[i].event);
    }
    for (let i = 0; i < monEventList.length; i += 1) {
      const num = monEventList[i];
      monCounts[num] = monCounts[num] ? monCounts[num] + 1 : 1;
    }
    contentList = Object.keys(monCounts);
    for (let i = 0; i < Object.keys(monCounts).length; i += 1) {
      if (monCounts[contentList[i]] === undefined) {
        monData.push(0);
      }
      monData.push(monCounts[contentList[i]]);
    }
    for (let i = 0; i < monData.length; i += 1) {
      if (monData[i] !== undefined) {
        MONDATA.push(monData[i] * 0.5);
      }
    }
    let sum = 0;
    for (let i = 0; i < MONDATA.length; i += 1) {
      sum += MONDATA[i];
    }
    if (num - sum !== 0) {
      MONDATA.push(num - sum);
    }
    for (let i = 0; i < contentList.length; i += 1) {
      colorList.push(dic[contentList[i]]);
    }
  };

  if (selDat === 'MON') {
    handleSelDay(MONTB, 24);
  } else if (selDat === 'TUE') {
    handleSelDay(TUETB, 24);
  } else if (selDat === 'WED') {
    handleSelDay(WEDTB, 24);
  } else if (selDat === 'THU') {
    handleSelDay(THUTB, 24);
  } else if (selDat === 'FRI') {
    handleSelDay(FRITB, 24);
  } else if (selDat === 'SAT') {
    handleSelDay(SATTB, 24);
  } else if (selDat === 'SUN') {
    handleSelDay(SUNTB, 24);
  } else if (selDat === 'WEEK') {
    const weekTB = MONTB.concat(TUETB)
      .concat(WEDTB)
      .concat(THUTB)
      .concat(FRITB)
      .concat(SATTB)
      .concat(SUNTB);
    console.log(weekTB);
    handleSelDay(weekTB, 168);
  }

  const data = {
    labels: contentList,
    datasets: [
      {
        label: '# of Times',
        data: MONDATA,
        backgroundColor: colorList,
        borderWidth: 0,
        borderColor: '#383838',
      },
    ],
  };
  return <Doughnut data={data} height={100} width={100} options={{ maintainAspectRatio: false }} />;
};
export default Doughnuts;
