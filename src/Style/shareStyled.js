import styled from 'styled-components';
import close from '../icon/remove.png';
import open from '../icon/add.png';
import closePop from '../icon/close_black.png';
import closePopSel from '../icon/close_black_sle.png';

const Title = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px 16px 20px;
  border-top: 1px solid #fff;
`;

export const ColBTN = styled.button`
  width: 16px;
  height: 16px;
  background-size: cover;
  background-image: ${(props) => (props.colSty ? `url(${close})` : `url(${open})`)};
  cursor: pointer;
`;

export const Container = styled.div`
  display: ${(props) => (props.colSty ? 'block' : 'none')};
`;

export const PosRelative = styled.div`
  position: relative;
`;
export const PosCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// POPUP
export const PopBG = styled.button`
  position: absolute;
  width: 100%;
  height: 300%;
  background-color: rgba(56, 56, 56, 0.5);
  z-index: 1002;
  top: 0px;
  &:hover {
    cursor: default;
  }
`;
export const PopUp = styled.div`
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  z-index: 1003;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
`;
export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${closePop});
  background-size: cover;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  &:hover {
    background-image: url(${closePopSel});
  }
`;
export const SignText = styled.div`
  @media (min-width: 100px) {
    padding: 60px 20px 60px 20px;
  }
  @media (min-width: 800px) {
    padding-top: 80px;
    padding-left: 50px;
    padding-right: 50px;
  }
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  & input {
    border-bottom: 1px solid rgb(14, 14, 14);
    margin-bottom: 10px;
    padding: 10px 0px 10px 0px;
    outline: none;
  }
  & form h5 {
    margin-top: 0px;
    margin-right: 10px;
  }
  }
`;
export const SignSubmit = styled.button`
  width: 234px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  border: none;
  color: #fff;
  margin-top: 20px;
  &:hover {
    background-color: ${(props) => props.colorSel};
  }
`;

export default Title;
