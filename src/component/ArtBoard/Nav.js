import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import firebase, { db } from '../../firebaseInit';
import sign from '../../icon/face.png';
import signSel from '../../icon/face_sel.png';
import save from '../../icon/save.png';
import logout from '../../icon/logout.png';
import saveSel from '../../icon/save_sel.png';
import unFoldSP from '../../icon/unFoldSP.png';
import unFoldSPSel from '../../icon/unFoldSP_sel.png';
import logoutSel from '../../icon/logout_sel.png';
import { timeblockDataContext } from '../../contexts/contexts';

const Nav = ({ sidepanel, setSidePanel, userId, setSaveCaution }) => {
  const [signHover, setSignHover] = useState(false);
  const [saveHover, setSaveHover] = useState(false);
  const [logoutHover, setLogoutHover] = useState(false);

  const { tbData, eventText } = useContext(timeblockDataContext);
  const history = useHistory();

  const handleSave = () => {
    if (userId !== '') {
      setSaveCaution(true);
      const cloudData = tbData;
      cloudData.events = eventText;
      db.collection('member')
        .doc(userId)
        .set(cloudData)
        .then(() => {
          setSaveCaution(false);
        });
    } else {
      history.push('/signIn');
    }
  };
  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        document.location.href = '/';
      })
      .catch((error) => {
        console.log('sign out error: ', error);
      });
  };
  const handleUnfoldSP = () => {
    setSidePanel(true);
  };
  const handleSignUp = () => {
    localStorage.setItem('temporaryData', JSON.stringify(tbData));
    history.push('/signUp');
  };
  const windowWidth = document.body.clientWidth;
  return (
    <>
      <NavBar sidepanelSty={sidepanel}>
        <Link to="/welcome">
          <GoBackBtn style={windowWidth}>INFO</GoBackBtn>
        </Link>
        <Menu>
          <BTN>
            <SaveBtn
              type="button"
              styDisplay={saveHover}
              onClick={handleSave}
              onMouseOver={() => {
                setSaveHover(true);
              }}
              onMouseOut={() => {
                setSaveHover(false);
              }}
            />
            <SaveInfo styDisplay={saveHover}>SAVE</SaveInfo>
          </BTN>
          <SplitLine />
          <BTN>
            <SignBtn
              type="button"
              styDisplay={signHover}
              StySign={userId}
              onClick={handleSignUp}
              onMouseOver={() => {
                setSignHover(true);
              }}
              onMouseOut={() => {
                setSignHover(false);
              }}
            />
            <SignInfo styDisplay={signHover}>SIGN</SignInfo>
          </BTN>
          <BTN>
            <LogoutBtn
              type="button"
              onClick={handleSignout}
              styDisplay={logoutHover}
              StySign={userId}
              onMouseOver={() => {
                setLogoutHover(true);
              }}
              onMouseOut={() => {
                setLogoutHover(false);
              }}
            />
            <LogoutInfo styDisplay={logoutHover}>LOG OUT</LogoutInfo>
          </BTN>
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
  display: ${(props) => (props.style < 700 ? 'none' : 'display')};
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  color: #e0e0e0;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const BTN = styled.div`
  position: relative;
`;
const SplitLine = styled.div`
  height: 14px;
  border-left: 2px solid #d3d3d3;
  margin-left: 14px;
`;
const SignBtn = styled.button`
  display: ${(props) => (props.StySign ? 'none' : 'block')};
  background-image: ${(props) => (props.styDisplay ? `url(${signSel})` : `url(${sign})`)};
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-left: 14px;
  cursor: pointer;
`;
const SignInfo = styled.h6`
  display: ${(props) => (props.styDisplay ? 'block' : 'none')};
  letter-spacing: 1px;
  position: absolute;
  top: 30px;
  right: -4px;
`;
const SaveBtn = styled.button`
  background-image: ${(props) => (props.styDisplay ? `url(${saveSel})` : `url(${save})`)};
  background-size: cover;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const SaveInfo = styled.h6`
  display: ${(props) => (props.styDisplay ? 'block' : 'none')};
  letter-spacing: 1px;
  position: absolute;
  top: 30px;
  left: -5px;
`;
const UnFoldSidepanel = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${unFoldSP});
  background-size: cover;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-image: url(${unFoldSPSel});
  }
`;
const SPmenu = styled.div`
  display: ${(props) => (props.sidepanelSty ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;
const LogoutBtn = styled.button`
  display: ${(props) => (props.StySign ? 'block' : 'none')};
  background-image: ${(props) => (props.styDisplay ? `url(${logoutSel})` : `url(${logout})`)};
  background-size: cover;
  margin-left: 14px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
const LogoutInfo = styled.h6`
  display: ${(props) => (props.styDisplay ? 'block' : 'none')};
  width: 15px;
  letter-spacing: 1px;
  position: absolute;
  top: 30px;
  right: 5px;
`;
