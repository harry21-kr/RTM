import React from 'react';
import Profile from '../../components/MyPage/Profile';
import Modify from '../../components/MyPage/Modify';
import styled from 'styled-components';
import { PostingList } from '../../components/MyPage/PostingList';

export default function MyPage() {
  return (
    <>
      <h1>MyPage</h1>
      <StMypageWrapper>
        <StMypageTopWrap>
          <Profile />
          <Modify />
        </StMypageTopWrap>
        <StPostingListTitle>Posting List</StPostingListTitle>
        <StMypageBottomWrap>
          <PostingList />
        </StMypageBottomWrap>
      </StMypageWrapper>
    </>
  );
}

const StMypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StMypageTopWrap = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const StPostingListTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  width: 40%;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem; // ::after의 bottom 위치를 맞추기 위해 추가
`;

const StMypageBottomWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
