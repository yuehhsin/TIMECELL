import React, { useContext } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import { timeblockDataContext } from '../../../../contexts/contexts';

defaults.global.legend.display = false;
defaults.global.animation.duration = 10;

const Doughnuts = ({ selDat }) => {
  const colorList = [];
  const monEventList = [];
  const monCounts = {};
  const monData = [];
  const MONDATA = [];
  let contentList = [];
  const { tbData, eventText } = useContext(timeblockDataContext);
  const dic = {};
  for (let i = 0; i < eventText.length; i += 1) {
    dic[eventText[i].content] = eventText[i].color;
  }

  const handleSelDay = (TB, num) => {
    for (let i = 0; i < TB.length; i += 1) {
      monEventList.push(TB[i].event);
    }
    for (let i = 0; i < monEventList.length; i += 1) {
      const Num = monEventList[i];
      monCounts[Num] = monCounts[Num] ? monCounts[Num] + 1 : 1;
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
    handleSelDay(tbData.MON, 24);
  } else if (selDat === 'TUE') {
    handleSelDay(tbData.TUE, 24);
  } else if (selDat === 'WED') {
    handleSelDay(tbData.WED, 24);
  } else if (selDat === 'THU') {
    handleSelDay(tbData.THU, 24);
  } else if (selDat === 'FRI') {
    handleSelDay(tbData.FRI, 24);
  } else if (selDat === 'SAT') {
    handleSelDay(tbData.SAT, 24);
  } else if (selDat === 'SUN') {
    handleSelDay(tbData.SUN, 24);
  } else if (selDat === 'WEEK') {
    const weekTB = tbData.MON.concat(tbData.TUE)
      .concat(tbData.WED)
      .concat(tbData.THU)
      .concat(tbData.FRI)
      .concat(tbData.SAT)
      .concat(tbData.SUN);
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
  return <Doughnut data={data} height={75} width={75} options={{ maintainAspectRatio: false }} />;
};
export default Doughnuts;
