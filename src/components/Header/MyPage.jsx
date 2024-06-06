import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';
import { useModal } from '../../contexts/Modal/useModal';
import PostingModal from '../Modal/PostingModal';

const MyPageHeader = () => {
  const [profile, setProfile] = useState();
  const [subtitle, setSubTitle] = useState();
  const [maintitle, setMainTitle] = useState();
  const { supabaseClient } = useAuth();
  const navigate = useNavigate();
  const [openModal] = useModal(<PostingModal />);

  const logOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    alert('로그아웃 되었습니다');
    navigate('/login');
  };

  const handleModify = () => {
    navigate('/ModifyPage');
  };

  // 뱃지 사진
  useEffect(() => {
    const fetchData = async () => {
      // 1. 현재 로그인되어있는 세션을 받아온다
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      const userId = sessionData.session.user.id;

      // 2.  유저테이블에서 모든 칼럼을 가져와 id를 비교하여 userData에 넣는다
      const { data: userData, error: userError } = await supabaseClient.from('users').select().eq('id', userId);
      const imageUrl = userData[0].profileImgURL;

      // 3. profile에 이미지 넣기. 어디에?? ==> state에
      setProfile(imageUrl);
    };
    fetchData();
  }, [supabaseClient]);

  // 헤더 코멘트 변경
  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      const userId = sessionData.session.user.id;

      const { data: userData, error: userError } = await supabaseClient.from('users').select().eq('id', userId);
      const WriteSubTitle = userData[0].comment;

      setSubTitle(WriteSubTitle);
    };
    fetchData();
  }, [supabaseClient]);

  // 타이틀 변경
  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      console.log('sessionData3 => ', sessionData);
      const userId = sessionData.session.user.id;

      const { data: userData, error: userError } = await supabaseClient.from('users').select().eq('id', userId);
      console.log('셋 유저 데이터3 ==> ', userData);
      const SiteTitle = userData[0].siteName;

      setMainTitle(SiteTitle);
    };
    fetchData();
  }, [supabaseClient]);

  return (
    <StyledHeader>
      <Title>{maintitle}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <StProfileWrapper>
        <Profile>
          <img src={profile} alt="Profile" />
        </Profile>
        <Btns>
          <Button onClick={openModal}>Write</Button>
          <Button onClick={handleModify}>Modify</Button>
          <Button onClick={logOut}>Logout</Button>
        </Btns>
      </StProfileWrapper>
    </StyledHeader>
  );
};

export default MyPageHeader;
const StProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid gray;
  height: 130px;
`;

const Title = styled.p`
  position: absolute;
  font-size: 40px;
  left: 140px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 16px;
  position: absolute;
  left: 145px;
  bottom: 15px;
  color: gray;
`;

const Btns = styled.div`
  /* position: absolute; */
  right: 250px;
  bottom: 5px;
  margin-bottom: 7px;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  background-color: transparent;
  /* border: 1px solid black; */
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 3px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #808080;
    color: white;
  }

  &:active {
    background-color: #2c2c2c;
    border-color: black;
  }
`;

const Profile = styled.div`
  /* position: absolute; */
  right: 332px;
  top: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
