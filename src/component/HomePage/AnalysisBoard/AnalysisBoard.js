import React from 'react';
import Comment from './Comment';
import Doughnuts from './Doughnut';
import Barchart from './Barchart';
import Quote from './Quote/Quote';

const AnalysisBoard = ({ comment }) => (
  <div className="anaBoard">
    <h3 className="anaBoard-title">TIME ANALYSIS</h3>
    <div className="chartScope">
      <div className="chart01">
        <Doughnuts />
      </div>
      <div className="chart02">
        <Barchart />
      </div>
    </div>
    {comment.map((commentText) => (
      <Comment commentText={commentText} />
    ))}

    <h3 className="anaBoard-title">QUOTE</h3>
    <Quote />
  </div>
);

export default AnalysisBoard;
