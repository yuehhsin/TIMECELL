import React, { useState } from 'react';
import styled from 'styled-components';
import Title, { ColBTN } from '../../../../../Style/shareStyled';

const Memo = ({ comment, setComment }) => {
  // HOOK
  const [input, setInput] = useState({});
  const [SP, setSP] = useState(true);

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
      <Title>
        <h4>MEMO</h4>
        <ColBTN type="button" onClick={handleSP} aria-label="collapse" colSty={SP} />
      </Title>
      <MemoContainer colSty={SP}>
        <Textarea
          className="memo-textarea"
          onChange={handleText}
          value={input.content}
          style={{ fontFamily: 'roboto', letterSpacing: '1px' }}
          placeholder="Try to input something"
        />
        <button type="button" onClick={handleComment}>
          <h5>ADD MEMO</h5>
        </button>
      </MemoContainer>
    </>
  );
};

export default Memo;

// STYLE
const Textarea = styled.textarea`
  width: 184px;
  height: 150px;
  border-radius: 5px;
  background-color: #464646;
  margin-bottom: 16px;
  border: none;
  padding: 15px 10px 15px 10px;
  resize: vertical;
  color: #fff;
  :focus {
    outline: none;
  }
`;
const MemoContainer = styled.div`
  display: ${(props) => (props.colSty ? 'block' : 'none')};
  padding: 0px 18px 12px 18px;
  box-sizing: border-box;
  & button {
    padding: 12px 18px 12px 18px;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #fff;
    background-color: #383838;
    text-align: center;
    text-align: center;
    box-sizing: border-box;
    :hover {
      background-color: #464646;
    }
  }
`;
