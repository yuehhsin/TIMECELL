import React from 'react';
// import firebase from '../../../firebaseInit';

const SingIn = ({ setSwi }) => {
  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwi = () => {
    setSwi('signup');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
  };
  return (
    <div className="signpopup">
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
        <button type="submit" className="switchBTN" onClick={handleSwi}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
export default SingIn;
