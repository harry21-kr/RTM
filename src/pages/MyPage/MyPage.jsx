import styled from 'styled-components';
import MyPageHeader from '../../components/Header/MyPage';
import { Calendar } from '../../components/MyPage/Calendar';
import Modify from '../../components/MyPage/Modify';
import { PostingList } from '../../components/MyPage/PostingList';
import Profile from '../../components/MyPage/Profile';

export default function MyPage() {
  return (
    <>
      <MyPageHeader />
      <StMypageWrapper>
        <StMypageTopWrap>
          <LeftColumn>
            <Profile />
            <StCalendarSection>
              <Calendar />
            </StCalendarSection>
          </LeftColumn>
          <RightColumn>
            <Modify />
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
  align-items: center;
  justify-content: center;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StCalendarSection = styled.div`
  width: 400px;
  height: 150px;
  cursor: pointer;
`;

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
  padding-bottom: 1rem;
`;

const StMypageBottomWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
