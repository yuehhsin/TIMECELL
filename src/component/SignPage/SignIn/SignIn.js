import React from 'react';

const SingIn = ({ setSwi }) => {
  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwi = () => {
    setSwi('signup');
  };
  return (
    <div className="signpopup">
      <div className="signinImg" />
      <div className="signinBox">
        <h2>SIGN IN</h2>
        <form>
          <input placeholder="EMAIL" style={inputStyle} />
          <input placeholder="PASSWORD" style={inputStyle} type="password" />
          <button type="button" className="SinginCTA">
            <h4>SIGN IN</h4>
          </button>
        </form>
        <button type="button" className="switchBTN" onClick={handleSwi}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
export default SingIn;
