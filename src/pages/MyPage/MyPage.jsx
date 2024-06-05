import React from 'react';
import Profile from '../../components/MyPage/Profile';
import Modify from '../../components/MyPage/Modify';
import styled from 'styled-components';

export default function MyPage() {
  return (
    <>
      <h1>MyPage</h1>
      <StMypageTopWrap>
        <Profile></Profile>
        <Modify></Modify>
      </StMypageTopWrap>
    </>
  );
}

const StMypageTopWrap = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 6rem;

  &::after {
    content: 'Posting List';
    text-align: center;
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    width: 40%;
    border-bottom: 2px solid #ccc;
  }
`;
