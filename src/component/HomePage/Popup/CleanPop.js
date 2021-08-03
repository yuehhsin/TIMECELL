import React from 'react';

const CleanPop = ({
  setCACaution,
  setCleanPop,
  selTB,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
  setReRender,
}) => {
  const handleCleanAll = () => {
    setCACaution(true);
    setCleanPop(false);
  };
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
  const handleCleanSel = () => {
    const List = selTB;
    delTB(List, 'MON', MONTB);
    delTB(List, 'TUE', TUETB);
    delTB(List, 'WED', WEDTB);
    delTB(List, 'THU', THUTB);
    delTB(List, 'FRI', FRITB);
    delTB(List, 'SAT', SATTB);
    delTB(List, 'SUN', SUNTB);
  };
  return (
    <>
      <div className="cleanPanel">
        <h5 className="cleanH5Top" onClick={handleCleanSel}>
          CLEAN ONE
        </h5>
        <h5 className="cleanH5BTM" onClick={handleCleanAll}>
          CLEAN ALL
        </h5>
      </div>
    </>
  );
};
export default CleanPop;
