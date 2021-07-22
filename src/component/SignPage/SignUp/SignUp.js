import React, { useState } from 'react';
import firebase, { memberData } from '../../../firebaseInit';

const SignUp = ({ setSwi }) => {
  // hook
  const [error, setError] = useState('');

  let email = '';
  let password = '';

  const inputStyle = {
    fontFamily: 'roboto, cursive',
    fontSize: '12px',
    letterSpacing: '2px',
  };
  const handleSwi = () => {
    setSwi('signin');
  };
  const handleEmail = (e) => {
    email = e.target.value;
  };
  // 建立新會員文件
  const Time = [];
  for (let i = 0; i < 24; i += 0.5) {
    Time.push(`MON-${i}`);
    Time.push(`TUE-${i}`);
    Time.push(`WED-${i}`);
    Time.push(`THU-${i}`);
    Time.push(`FRI-${i}`);
    Time.push(`SAT-${i}`);
    Time.push(`SUN-${i}`);
  }
  const hanlePasssword = (e) => {
    password = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        for (let n = 0; n < 336; n += 1) {
          const weekNtime = Time[n].split('-');
          // 創建初始化timeblockInfo
          memberData
            .doc(email)
            .collection('timeblockInfo')
            .doc(Time[n])
            .set(
              {
                week: weekNtime[0],
                time: parseFloat(weekNtime[1]),
                color: '#F4F4F4',
                event: '',
              },
              { merge: true },
            )
            .then(() => {
              console.log('timeblockInfo successfully written!');
            })
            .catch((E) => {
              console.error('Error writing document: ', E);
            });
        }
        // 創建初始eventInfo
        memberData
          .doc(email)
          .set({ eventInfo: [{ content: 'Hello REACT', color: '#36BC9B', id: Math.random() }] })
          .then(() => {})
          .catch((E) => {
            console.error('Error writing document: ', E);
          });
      })
      .catch((ero) => {
        setError(ero.message);
        console.log(error.code);
      });
  };
  return (
    <div className="signpopup">
      <div className="signupImg" />
      <div className="signinBox">
        <h2>CREATE ACCOUNT</h2>
        <form>
          <input placeholder="EMAIL" style={inputStyle} onChange={handleEmail} />
          <input
            placeholder="PASSWORD"
            style={inputStyle}
            type="password"
            onChange={hanlePasssword}
          />
          <h5 className="errorMessage">{error}</h5>
          <div className="social_sign">
            <h5>SOCIAL LOGIN</h5>
            <div className="google" />
            <div className="github" />
          </div>
          <button type="submit" className="CTA" onClick={handleSubmit}>
            <h4>SIGN UP</h4>
          </button>
        </form>
        <button type="button" className="switchBTN" onClick={handleSwi}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SignUp;
