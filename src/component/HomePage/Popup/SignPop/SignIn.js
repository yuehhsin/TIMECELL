import React from 'react';
// import firebase from '../../../firebaseInit';

const SingIn = ({ setSwitch, setSignPop }) => {
  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwitch = () => {
    setSwitch('signup');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
  };
  const handlePopClose = () => {
    setSignPop(false);
  };
  const popupX = (document.body.clientWidth - 240 - 512) / 2;
  return (
    <div className="signpopup" style={{ left: `${popupX}px`, top: '250px' }}>
      <button type="button" className="closePop" aria-label="ClosePop" onClick={handlePopClose} />
      <div className="signinImg" />
      <div className="signinBox">
        <h2>SIGN IN</h2>
        <form>
          <input placeholder="EMAIL" style={inputStyle} />
          <input placeholder="PASSWORD" style={inputStyle} type="password" />
          <button type="button" className="SinginCTA" onSubmit={handleSubmit}>
            <h4>SIGN IN</h4>
          </button>
        </form>
        <button type="submit" className="switchBTN" onClick={handleSwitch}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
export default SingIn;
