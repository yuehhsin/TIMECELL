import React, { useState } from 'react';
import open from '../../../../../icon/add.png';
import close from '../../../../../icon/remove.png';

const Memo = ({ comment, setComment }) => {
  // HOOK
  const [input, setInput] = useState({});
  const [SP, setSP] = useState(true); // 開合視窗

  const handleText = (e) => {
    setInput({ content: e.target.value, id: Math.random() });
  };
  const handleComment = () => {
    if (input !== '') {
      setComment([...comment, input]);
      setInput({ content: '', id: '' });
    }
  };
  const handleSP = () => {
    setSP(!SP);
  };
  return (
    <>
      <div className="eventTit">
        <h4>MEMO</h4>
        <button
          type="button"
          className="collapse"
          onClick={handleSP}
          style={SP ? { backgroundImage: `url(${close})` } : { backgroundImage: `url(${open})` }}
          aria-label="collapse"
        />
      </div>
      {SP ? (
        <>
          <div className="MEMO">
            <div className="comment">
              <textarea
                className="commentBox"
                onChange={handleText}
                value={input.content}
                style={{ fontFamily: 'roboto', letterSpacing: '1px', color: '#fff' }}
                placeholder="Try to input something"
              />
              <button type="button" onClick={handleComment}>
                <h5>ADD MEMO</h5>
              </button>
            </div>
          </div>
        </>
      ) : (
        false
      )}
    </>
  );
};

export default Memo;
