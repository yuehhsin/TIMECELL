import React from 'react';
import styled from 'styled-components';
import Edit from './Edit/Edit';
import Developer from './Developer/Developer';
import Tab from './Tab';
import foldSP from '../../../icon/foldSP.png';
import foldSPSel from '../../../icon/foldSP_sel.png';

const SidePanel = ({
  selEvent,
  setSelEvent,
  tab,
  setTab,
  comment,
  setComment,
  setCaution,
  eventText,
  setEventText,
  MONTB,
  TUETB,
  WEDTB,
  THUTB,
  FRITB,
  SATTB,
  SUNTB,
  reRender,
  setReRender,
  sidepanel,
  setSidePanel,
}) => {
  const handleFoleSP = () => {
    setSidePanel(false);
  };

  return (
    <SidePanelScope sidepanelSty={sidepanel}>
      <FoleSPbtn onClick={handleFoleSP} />
      <Tab tab={tab} setTab={setTab} />
      {tab === 'edit' ? (
        <Edit
          selEvent={selEvent}
          setSelEvent={setSelEvent}
          setCaution={setCaution}
          eventText={eventText}
          setEventText={setEventText}
          MONTB={MONTB}
          TUETB={TUETB}
          WEDTB={WEDTB}
          THUTB={THUTB}
          FRITB={FRITB}
          SATTB={SATTB}
          SUNTB={SUNTB}
          reRender={reRender}
          setReRender={setReRender}
          comment={comment}
          setComment={setComment}
        />
      ) : (
        <Developer />
      )}
    </SidePanelScope>
  );
};

export default SidePanel;

// STYLE
const SidePanelScope = styled.div`
  display: ${(props) => (props.sidepanelSty ? 'block' : 'none')};
  width: 240px;
  height: 100%;
  background-color: #383838;
  position: fixed;
  right: 0px;
  top: 0px;
  overflow: auto;
  user-select: none;
`;

const FoleSPbtn = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${foldSP});
  background-size: cover;
  position: absolute;
  top: 14px;
  right: 20px;
  &:hover {
    background-image: url(${foldSPSel});
  }
`;
