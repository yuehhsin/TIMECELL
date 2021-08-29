import React, { useState } from 'react';
import { PopBG } from '../../../../Style/shareStyled';

import SignUp from './SignUp';
import SignIn from './SignIn';

import './signpop.css';

const SignPop = ({ setSignPop, setUUID }) => {
  // HOOK
  const [Switch, setSwitch] = useState('signup');

  const handlePopClose = () => {
    setSignPop(false);
  };

  return (
    <>
      <PopBG type="button" onClick={handlePopClose} aria-label="close BG" />
      {Switch === 'signup' ? <SignUp setSignPop={setSignPop} setSwitch={setSwitch} /> : false}
      {Switch === 'signin' ? (
        <SignIn setSignPop={setSignPop} setSwitch={setSwitch} setUUID={setUUID} />
      ) : (
        false
      )}
    </>
  );
};

export default SignPop;
