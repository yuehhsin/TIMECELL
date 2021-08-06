import React, { useState } from 'react';
import 'animate.css';

const Comment = ({ commentText, dataId, comment, setComment }) => {
  // HOOK
  const [cursorPos, setCursorPos] = useState({ x: 800, y: 500 }); // 紀錄滑鼠位置
  const [move, setMove] = useState(false); // 可以移動的comment
  const [commentBlock, setCommentBlock] = useState(false); // comment的小視窗
  const [inputVaule, setInputVaule] = useState(commentText);

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
    setCommentBlock(commentBlock !== true);
  };
  const handleMemoDel = () => {
    setComment(comment.filter((el) => el.id !== dataId));
  };
  const handleOnChange = (e) => {
    setInputVaule(e.target.value);
  };
  const handleCleanText = () => {
    setInputVaule('');
  };
  return (
    <div>
      <div
        className="commentIcon animate__animated animate__bounce"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <textarea
        className={commentBlock ? 'commentBlock' : 'hidden'}
        style={{
          left: `${cursorPos.x + 50}px`,
          top: `${cursorPos.y}px`,
          fontFamily: 'roboto',
          letterSpacing: '1px',
        }}
        onChange={handleOnChange}
        value={inputVaule}
      />
      {commentBlock ? (
        <>
          <button
            type="button"
            className="memoDel"
            style={{ left: `${cursorPos.x + 300}px`, top: `${cursorPos.y + 10}px` }}
            onClick={handleMemoDel}
          >
            DEL
          </button>
          <button
            type="button"
            className="memoDel"
            style={{ left: `${cursorPos.x + 255}px`, top: `${cursorPos.y + 10}px` }}
            onClick={handleCleanText}
          >
            CLE
          </button>
        </>
      ) : (
        false
      )}
    </div>
  );
};
export default Comment;
