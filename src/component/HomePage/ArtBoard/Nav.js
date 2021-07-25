import React from 'react';
import firebase from '../../../firebaseInit';

const Nav = () => {
  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign-out successful');
        // Sign-out successful.
        // 跳轉回singpage
      })
      .catch((error) => {
        console.log('sign out error: ', error);
      });
  };
  return (
    <>
      <div className="nav">
        <div className="logo" />
        <div className="menu" />
        <div className="import-btn">
          <h4>SAVE</h4>
          <div className="split-line" />
          <h4 className="signOut" onClick={handleSignout}>
            SIGN-OUT
          </h4>
        </div>
      </div>
    </>
  );
};

export default Nav;
