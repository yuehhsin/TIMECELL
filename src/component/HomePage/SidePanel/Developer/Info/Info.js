import React, { useState } from 'react';
import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

const Info = () => {
  // HOOK
  const [SP, setSP] = useState(true); // 開合視窗
  const handleSP = () => {
    setSP(!SP);
  };

  return (
    <>
      <div className="styleTit">
        <h4>INFO</h4>
        <button
          type="button"
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
          aria-label="collapse"
        />
      </div>
    </>
  );
};
export default Info;
