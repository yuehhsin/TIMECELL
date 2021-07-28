import React from 'react';

const Quote = () => (
  <div className="quoteScope">
    <div className="content">
      <div className="favIcon" />
      <div className="text">
        <h3>Time waits for no one</h3>
        <h4>Folklore</h4>
      </div>
    </div>
    <div className="menuList">
      <div className="align">
        <div className="editIcon" />
        <h6>EDIT</h6>
      </div>
      <div className="align">
        <div className="delIcon" />
        <h6>DELETE</h6>
      </div>
    </div>
  </div>
);

export default Quote;
