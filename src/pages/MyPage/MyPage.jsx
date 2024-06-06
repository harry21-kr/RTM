import MyPageHeader from '../../components/Header/MyPage';
import React from 'react';
import Profile from '../../components/MyPage/Profile';
import Modify from '../../components/MyPage/Modify';
import styled from 'styled-components';
import { PostingList } from '../../components/MyPage/PostingList';
import { Calendar } from '../../components/MyPage/Calendar';

export default function MyPage() {
  return (
    <>
      <MyPageHeader />
      <StMypageWrapper>
        <StMypageTopWrap>
          <LeftColumn>
            <Profile />
          </LeftColumn>
          <RightColumn>
            {/* <Modify /> */}
            <StCalendarSection>
              <Calendar />
            </StCalendarSection>
          </RightColumn>
        </StMypageTopWrap>
        <StPostingListTitle>Posting List</StPostingListTitle>
        <StMypageBottomWrap>
          <PostingList />
        </StMypageBottomWrap>
      </StMypageWrapper>
    </>
  );
}

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StCalendarSection = styled.div`
  width: 700px;
  height: 200px;
  cursor: pointer;
`;

const StMypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StMypageTopWrap = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const StPostingListTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  width: 40%;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
`;

const StMypageBottomWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
