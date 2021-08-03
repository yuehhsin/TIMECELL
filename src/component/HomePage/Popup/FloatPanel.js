import React, { useState } from 'react';
import 'animate.css';

// Component
import CleanPop from './CleanPop';

const FloatPanel = ({
  selTB,
  setCACaution,
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
  // HOOK
  const [cleanPop, setCleanPop] = useState(false);

  const selTime = `Select  ${selTB.length * 0.5}  Hour`;
  const floatpanel =
    selTB.length === 0 ? 'hidden' : 'floatpanel animate__animated animate__fadeInUp';
  const handleCleanPanel = () => {
    setCleanPop(true);
  };
  const handleClose = () => {
    setCleanPop(false);
  };
  return (
    <>
      {cleanPop ? <div className="cleanpopBG" onClick={handleClose} /> : false}
      <div className={floatpanel}>
        {cleanPop ? (
          <CleanPop
            setCACaution={setCACaution}
            setCleanPop={setCleanPop}
            selTB={selTB}
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
        ) : (
          false
        )}
        <h5>{selTime}</h5>
        <button type="button" className="claenEvent" onClick={handleCleanPanel} />
      </div>
    </>
  );
};
export default FloatPanel;
