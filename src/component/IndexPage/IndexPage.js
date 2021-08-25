import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import KV from '../../image/kv.png';
import { PosCenter } from '../../Style/shareStyled';
import '../../Style/generalCss.css';

const IndexPage = () => (
  <>
    <Nav />
    <KVimage />
    <PosCenter>
      <ContentScope>
        <h2>BRIEF</h2>
        <h3>
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset It was popularised in the 1960s with the release of Letraset
        </h3>
        <h2>TRAIL</h2>
      </ContentScope>
    </PosCenter>
  </>
);
export default IndexPage;

const KVimage = styled.div`
  height: 400px;
  //   background-image: url(${KV});
  background-color: gray;
  background-size: cover;
`;
const ContentScope = styled.div`
  width: 1200px;
  height: 10000px;
  border: 1px solid red;
  & h2 {
    margin-top: 30px;
  }
  & h3 {
    margin-top: 10px;
    line-height: 25px;
    font-weight: normal;
  }
`;
