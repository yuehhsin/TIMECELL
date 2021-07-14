import React, { useState } from 'react';

import './signpage.css';

// component
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

const Indexpage = () => {
  const [swi, setSwi] = useState('signup');
  return (
    <div className="startPage" style={{ fontFamily: 'roboto, cursive' }}>
      <div className="bg" />
      {swi === 'signup' ? <SignUp setSwi={setSwi} /> : <SignIn setSwi={setSwi} />}
    </div>
  );
};
export default Indexpage;
