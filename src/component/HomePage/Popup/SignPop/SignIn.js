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
  return (
    <div className="signpopup">
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
