import styled from 'styled-components';
import close from '../icon/remove.png';
import open from '../icon/add.png';

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

export default Title;
