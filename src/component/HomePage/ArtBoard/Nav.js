import React, { useState } from 'react';
import styled from 'styled-components';
import { PosRelative } from '../../../Style/shareStyled';
import sign from '../../../icon/face.png';
import signSel from '../../../icon/face_sel.png';
import save from '../../../icon/save.png';
import saveSel from '../../../icon/save_sel.png';
import unFoldSP from '../../../icon/unFoldSP.png';
import unFoldSPSel from '../../../icon/unFoldSP_sel.png';

const Nav = ({ setSignPop, sidepanel, setSidePanel }) => {
  // HOOK
  const [signHover, setSignHover] = useState(false); // signBTN(hover顯示)
  const [saveHover, setSaveHover] = useState(false); // signBTN(hover顯示)

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
  // const handleSignout = () => {
  //   // 登出
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('Sign-out successful');
  //       // Sign-out successful.
  //       // 跳轉回singpage
  //     })
  //     .catch((error) => {
  //       console.log('sign out error: ', error);
  //     });
  // };
  const handleUnfoldSP = () => {
    setSidePanel(true);
  };
  return (
    <>
      <NavBar sidepanelSty={sidepanel}>
        <GoBackBtn> </GoBackBtn>
        <Menu>
          <PosRelative>
            <SignBtn
              type="button"
              onMouseOver={handleMouseInSign}
              onMouseOut={handleMouseOutSign}
              onClick={handleSign}
              signHoverSty={signHover}
            />
            <SignInfo signHoverSty={signHover}>SIGN</SignInfo>
          </PosRelative>
          <SplitLine />
          <PosRelative>
            <SaveBtn
              type="button"
              onMouseOver={handleMouseInSave}
              onMouseOut={handleMouseOutSave}
              saveHoverSty={saveHover}
              sidepanelSty={sidepanel}
            />
            <SaveInfo saveHoverSty={saveHover}>SAVE</SaveInfo>
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
  // border: 1px solid red;
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
  background-size: cover;
  width: 20px;
  height: 20px;
`;
const SignInfo = styled.h6`
  display: ${(props) => (props.signHoverSty ? 'block' : 'none')};
  letter-spacing: 1px;
  margin-left: 2px;
  position: absolute;
  top: 6px;
  left: -6px;
`;
const SaveBtn = styled.button`
  margin-left: 14px;
  background-image: ${(props) => (props.saveHoverSty ? `url(${saveSel})` : `url(${save})`)};
  margin-right: ${(props) => (props.sidepanelSty ? '20px' : '0px')};
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
  left: -3px;
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
  // border: 1px solid red;
  justify-content: center;
  align-items: center;
`;
