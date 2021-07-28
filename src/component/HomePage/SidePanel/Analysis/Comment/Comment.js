import React from 'react';

const Comment = () => {
  const handleText = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="comment">
      <h4>COMMENT</h4>
      <textarea className="commentBox" onChange={handleText} />
      <button type="button">
        <h5>Add Comment</h5>
      </button>
    </div>
  );
};
export default Comment;
