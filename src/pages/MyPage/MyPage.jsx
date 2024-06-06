import { FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from '../../components/Header/MyPage';
import { Calendar } from '../../components/MyPage/Calendar';
import { PostingList } from '../../components/MyPage/PostingList';
import Profile from '../../components/MyPage/Profile';
import { useAuth } from '../../contexts/Auth/hooks';

export default function MyPage() {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <MyPageHeader />
      <StMypageWrapper>
        <StMypageTopWrap>
          <LeftColumn>
            <Profile />
          </LeftColumn>
          <RightColumn>
            <StCalendarSection>
              <Calendar />
            </StCalendarSection>
          </RightColumn>
        </StMypageTopWrap>
        <StPostingListTitle>Posting List</StPostingListTitle>
        <StMypageBottomWrap>
          <PostingList />
          <Footer>
            {' '}
            <Icon /> <Icon2 /> <Icon3 />{' '}
          </Footer>
        </StMypageBottomWrap>
      </StMypageWrapper>
    </>
  );
}

const Footer = styled.footer`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-top: 1px solid #ccc;
  bottom: 0;
`;
const Icon = styled(FaInstagram)`
  font-size: 25px;
  top: 5px;
  left: 40px;
  cursor: pointer;
`;

const Icon2 = styled(FaFacebook)`
  font-size: 25px;
  top: 5px;
  left: 40px;
  cursor: pointer;
`;

const Icon3 = styled(FaFacebookMessenger)`
  font-size: 25px;
  top: 5px;
  left: 40px;
  cursor: pointer;
`;

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
  width: 780px;
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
  font-size: 2rem;
  font-weight: 600;
  width: 40%;
  border-top: 2px solid #ccc;
  margin: 40px;
  padding-top: 40px;
`;

const StMypageBottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;
