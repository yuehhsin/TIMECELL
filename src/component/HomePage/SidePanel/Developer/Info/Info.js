import React, { useState } from 'react';
import styled from 'styled-components';
import Title, { ColBTN, Container } from '../../../../../Style/shareStyled';

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
