import React, { useState } from 'react';
import Title, { ColBTN } from '../../../../style/shareStyled';

const Info = () => {
  // HOOK
  const [SP, setSP] = useState(true);
  const handleSP = () => {
    setSP(!SP);
  };

  return (
    <>
      <Title>
        <h4>INFO</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>
    </>
  );
};
export default Info;
