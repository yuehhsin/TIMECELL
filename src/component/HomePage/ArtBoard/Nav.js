import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../../../firebaseInit';
import { PosRelative } from '../../../Style/shareStyled';
import sign from '../../../icon/face.png';
import signSel from '../../../icon/face_sel.png';
import save from '../../../icon/save.png';
import saveSel from '../../../icon/save_sel.png';
import unFoldSP from '../../../icon/unFoldSP.png';
import unFoldSPSel from '../../../icon/unFoldSP_sel.png';

const Nav = ({ setSignPop, sidepanel, setSidePanel, UUID, setUUID, setSave, save }) => {
  // HOOK
  const [signHover, setSignHover] = useState(false);
  const [saveHover, setSaveHover] = useState(false);

  const handleMouseInSign = () => {
    setSignHover(true);
  };
  const handleMouseOutSign = () => {
    setSignHover(false);
  };
  const handleMouseInSave = () => {
    setSaveHover(true);
  };
  const handleMouseOutSave = () => {
    setSaveHover(false);
  };
  const handleSign = () => {
    setSignPop(true);
  };
  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUUID('');
        console.log('Sign-out successful');
      })
      .catch((error) => {
        console.log('sign out error: ', error);
      });
  };
  const handleUnfoldSP = () => {
    setSidePanel(true);
  };
  const handleSave = () => {
    console.log('hey');
    setSave(true);
  };
  return (
    <>
      <NavBar sidepanelSty={sidepanel}>
        <GoBackBtn> </GoBackBtn>
        <Menu>
          {UUID === '' ? (
            false
          ) : (
            <>
              <PosRelative>
                <SaveBtn
                  type="button"
                  onMouseOver={handleMouseInSave}
                  onMouseOut={handleMouseOutSave}
                  saveHoverSty={saveHover}
                  onClick={handleSave}
                />
                <SaveInfo saveHoverSty={saveHover}>SAVE</SaveInfo>
              </PosRelative>
              <SplitLine />
            </>
          )}
          <PosRelative>
            <SignBtn
              type="button"
              onMouseOver={handleMouseInSign}
              onMouseOut={handleMouseOutSign}
              onClick={UUID === '' ? handleSign : handleSignout}
              signHoverSty={signHover}
              sidepanelSty={sidepanel}
            />
            <SignInfo signHoverSty={signHover} isSignin={UUID}>
              {UUID === '' ? 'SIGN' : 'SIGN OUT'}
            </SignInfo>
          </PosRelative>
          <SPmenu sidepanelSty={sidepanel}>
            <SplitLine />
            <UnFoldSidepanel onClick={handleUnfoldSP} />
          </SPmenu>
        </Menu>
      </NavBar>
    </>
  );
};
export default Nav;

// STYLE
const NavBar = styled.div`
  width: ${(props) => (props.sidepanelSty ? 'calc(100% - 240px)' : 'calc(100% - 20px)')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0px;
`;
const GoBackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  color: #e0e0e0;
  &:hover {
    color: #000000;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const SplitLine = styled.div`
  height: 14px;
  border-left: 2px solid #d3d3d3;
  margin-left: 14px;
`;
const SignBtn = styled.button`
  background-image: ${(props) => (props.signHoverSty ? `url(${signSel})` : `url(${sign})`)};
  margin-right: ${(props) => (props.sidepanelSty ? '14px' : '0px')};
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-left: 14px;
`;
const SignInfo = styled.h6`
  display: ${(props) => (props.signHoverSty ? 'block' : 'none')};
  text-align: center;
  letter-spacing: 1px;
  margin-left: 2px;
  position: absolute;
  top: 6px;
  left: 6px;
`;
const SaveBtn = styled.button`
  background-image: ${(props) => (props.saveHoverSty ? `url(${saveSel})` : `url(${save})`)};
  background-size: cover;
  width: 20px;
  height: 20px;
`;
const SaveInfo = styled.h6`
  display: ${(props) => (props.saveHoverSty ? 'block' : 'none')};
  letter-spacing: 1px;
  margin-left: 12px;
  position: absolute;
  top: 6px;
  right: -5px;
`;
const UnFoldSidepanel = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${unFoldSP});
  background-size: cover;
  margin-left: 10px;
  &:hover {
    background-image: url(${unFoldSPSel});
  }
`;
const SPmenu = styled.div`
  display: ${(props) => (props.sidepanelSty ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;
