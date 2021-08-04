/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';

const Nav = ({ setSignPop }) => {
  // HOOK
  const [signHover, setSignHover] = useState(false); // signBTN(hover顯示)
  const [saveHover, setSaveHover] = useState(false); // signBTN(hover顯示)

  const handleMouseInSign = () => {
    setSignHover(true);
  };
  const handleMouseOutSign = () => {
    setSignHover(false);
  };
  const handleMouseInSave = () => {
    setSaveHover(true);
  };
  const handleMouseOutSave = () => {
    setSaveHover(false);
  };
  const handleSign = () => {
    setSignPop(true);
  };
  // const handleSignout = () => {
  //   // 登出
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('Sign-out successful');
  //       // Sign-out successful.
  //       // 跳轉回singpage
  //     })
  //     .catch((error) => {
  //       console.log('sign out error: ', error);
  //     });
  // };
  return (
    <>
      <div className="nav">
        <div className="menu">
          <div className="backBTN" />
          <h4>BACK</h4>
        </div>
        <div className="import-btn">
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className={signHover ? 'signBTN signHover' : 'signBTN'}
              aria-label="signBTN"
              onMouseOver={handleMouseInSign}
              onMouseOut={handleMouseOutSign}
              onClick={handleSign}
            />
            {signHover ? <h6 className="signInfo">SIGN</h6> : false}
          </div>
          <div className="split-line" />
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className={saveHover ? 'saveBTN saveHover' : 'saveBTN'}
              aria-label="saveBTN"
              onMouseOver={handleMouseInSave}
              onMouseOut={handleMouseOutSave}
            />
            {saveHover ? <h6 className="saveInfo">SAVE</h6> : false}
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
