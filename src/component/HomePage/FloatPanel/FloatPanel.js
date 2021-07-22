import React from 'react';
import { initData } from '../../../firebaseInit';

// eslint-disable-next-line object-curly-newline
const FloatPanel = ({ selTB, setReRender, reRender, setSelTB }) => {
  const selTime = `Select ${selTB.length} Hour`;
  const floatpanel = selTB.length === 0 ? 'hidden' : 'floatpanel ';

  // HOOK
  const handleInit = () => {
    initData('test@gmail.com');
    setReRender(reRender + 1);
    setSelTB([]);
  };

  return (
    <div className={floatpanel}>
      <h5>{selTime}</h5>
      <div className="claenEvent" onClick={handleInit} />
    </div>
  );
};
export default FloatPanel;
