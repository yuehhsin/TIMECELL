import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

import './signpop.css';

const SignPop = ({ setSignPop }) => {
  // HOOK
  const [Switch, setSwitch] = useState('signup');

  const handlePopClose = () => {
    setSignPop(false);
  };

  return (
    <>
      <button type="button" className="popupBG" onClick={handlePopClose} aria-label="close BG" />
      {Switch === 'signup' ? <SignUp setSignPop={setSignPop} setSwitch={setSwitch} /> : false}
      {Switch === 'signin' ? <SignIn setSignPop={setSignPop} setSwitch={setSwitch} /> : false}
    </>
  );
};

export default SignPop;
