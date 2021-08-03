import React, { useState } from 'react';

const Comment = ({ commentText }) => {
  // HOOK
  const [cursorPos, setCursorPos] = useState({ x: 800, y: 500 }); // 紀錄滑鼠位置
  const [move, setMove] = useState(false); // 可以移動的comment
  const [commentBlock, setCommentBlock] = useState(false); // comment的小視窗

  const handleClick = () => {
    setMove(move !== true);
    // setCommentBlock(false);
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
  return (
    <>
      <div
        className="commentIcon"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <textarea
        className={commentBlock ? 'commentBlock' : 'hidden'}
        style={{ left: `${cursorPos.x + 50}px`, top: `${cursorPos.y}px` }}
      >
        {commentText}
      </textarea>
    </>
  );
};
export default Comment;
