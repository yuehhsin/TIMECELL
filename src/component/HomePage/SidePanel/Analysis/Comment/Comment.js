import React, { useState } from 'react';

const Comment = ({ comment, setComment }) => {
  // HOOK
  const [input, setInput] = useState();
  const handleText = (e) => {
    setInput(e.target.value);
  };
  const handleComment = () => {
    setComment([...comment, input]);
    setInput('');
  };
  return (
    <div className="comment">
      <h4>COMMENT</h4>
      <textarea className="commentBox" onChange={handleText} value={input} />
      <button type="button" onClick={handleComment}>
        <h5>Add Comment</h5>
      </button>
    </div>
  );
};
export default Comment;
