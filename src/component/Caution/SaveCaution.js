import React from 'react';
import styled from 'styled-components';
import 'animate.css';

const SaveCaution = () => (
  <SavePopup className="animate__animated animate__fadeInUp">
    <h4>Saving ...</h4>
  </SavePopup>
);

export default SaveCaution;

const SavePopup = styled.div`
  display: felx;
  width: 160px;
  height: 40px;
  background-color: #8b8b8b;
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  left: calc((100% - 240px) / 2);
  top: 88%;
  transform: translateX(-50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 1001;
  color: #fff;
`;
