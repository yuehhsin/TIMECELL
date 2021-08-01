import React from 'react';
import { initData } from '../../../firebaseInit';
import 'animate.css';

// node_modules / animate.css / animate.compat.css;

// eslint-disable-next-line object-curly-newline
const FloatPanel = ({ selTB, setReRender, reRender, setSelTB }) => {
  const selTime = `Select  ${selTB.length * 0.5}  Hour`;
  const floatpanel =
    selTB.length === 0 ? 'hidden' : 'floatpanel animate__animated animate__fadeInDown';

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
