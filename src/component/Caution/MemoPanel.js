import React, { useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import memoIcon from '../../icon/comment.png';

const MemoPanel = ({ memoText, dataId, memo, setMemo }) => {
  // HOOK
  const [cursorPos, setCursorPos] = useState({ x: 800, y: 500 });
  const [move, setMove] = useState(false);
  const [memoBlock, setMemoBlock] = useState(false);
  const [inputVaule, setInputVaule] = useState(memoText);

  const handleClick = () => {
    setMove(move !== true);
  };
  window.onmousemove = (e) => {
    if (move === true) {
      const positionX = e.pageX - 20;
      const positionY = e.pageY - 20;
      setCursorPos({ x: positionX, y: positionY });
    }
  };
  const handleMouseDown = () => {
    setMove(true);
  };
  const handleDoubleClick = () => {
    setMemoBlock(memoBlock !== true);
  };
  const handleMemoDel = () => {
    setMemo(memo.filter((el) => el.id !== dataId));
  };
  const handleOnChange = (e) => {
    setInputVaule(e.target.value);
  };
  const handleCleanText = () => {
    setInputVaule('');
  };
  return (
    <div>
      <MemoIcon
        className="animate__animated animate__bounce"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <MemoArea
        style={{
          left: `${cursorPos.x + 50}px`,
          top: `${cursorPos.y}px`,
          fontFamily: 'roboto',
          letterSpacing: '1px',
        }}
        onChange={handleOnChange}
        value={inputVaule}
        doubleClickSty={memoBlock}
      />
      <MemoBtn
        type="button"
        style={{ left: `${cursorPos.x + 300}px`, top: `${cursorPos.y + 10}px` }}
        onClick={handleMemoDel}
        doubleClickSty={memoBlock}
      >
        DEL
      </MemoBtn>
      <MemoBtn
        type="button"
        style={{ left: `${cursorPos.x + 255}px`, top: `${cursorPos.y + 10}px` }}
        onClick={handleCleanText}
        doubleClickSty={memoBlock}
      >
        CLE
      </MemoBtn>
    </div>
  );
};
export default MemoPanel;

// STYLE
const MemoIcon = styled.div`
  background-image: url(${memoIcon});
  background-size: cover;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`;
const MemoArea = styled.textarea`
  display: ${(props) => (props.doubleClickSty ? 'block' : 'none')};
  width: 300px;
  height: 100px;
  position: absolute;
  left: 20px;
  padding: 45px 20px 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  color: #383838;
  border: 1px solid #8b8b8b;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
`;
const MemoBtn = styled.button`
  display: ${(props) => (props.doubleClickSty ? 'block' : 'none')};
  position: absolute;
  top: 0;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #383838;
  background-color: #fff;
  &:hover {
    background-color: #383838;
    color: #fff;
  }
`;
