import React, { useState } from 'react';

let move = false;
const Comment = () => {
  // HOOK
  const [cursorPos, setCursorPos] = useState({}); // 紀錄滑鼠位置

  const handleClick = () => {
    move = move !== true;
  };
  window.onmousemove = (e) => {
    if (move === true) {
      const positionX = e.pageX - 20;
      const positionY = e.pageY - 20;
      setCursorPos({ x: positionX, y: positionY });
    }
  };
  const handleMouseDown = () => {
    move = true;
  };
  const handleDoubleClick = () => {
    console.log('double!!!');
  };
  return (
    <div
      className="commentIcon"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
    />
  );
};
export default Comment;
