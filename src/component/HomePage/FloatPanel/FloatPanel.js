import React from 'react';

const FloatPanel = ({ selTB }) => {
  const selTime = `Select ${selTB.length} Hour`;
  const floatpanel = selTB.length === 0 ? 'hidden' : 'floatpanel ';
  return (
    <div className={floatpanel}>
      <h5>{selTime}</h5>
      <div className="claenEvent" />
    </div>
  );
};
export default FloatPanel;
