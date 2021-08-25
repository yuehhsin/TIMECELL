import React from 'react';
import styled from 'styled-components';

const Tab = ({ tab, setTab }) => {
  const handleEdit = () => {
    setTab('edit');
  };
  const handleSta = () => {
    setTab('developer');
  };
  return (
    <TabScope>
      <button
        type="button"
        onClick={handleEdit}
        style={tab === 'edit' ? { color: '#fff' } : { color: '#878787' }}
      >
        EDIT
      </button>
      <button
        type="button"
        onClick={handleSta}
        style={tab === 'developer' ? { color: '#fff' } : { color: '#878787' }}
      >
        DEVELOPER
      </button>
    </TabScope>
  );
};

export default Tab;

// STYLE
const TabScope = styled.div`
  display: flex;
  & button {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 16px 0px 16px 0px;
    margin-left: 20px;
    color: #878787;
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
`;
