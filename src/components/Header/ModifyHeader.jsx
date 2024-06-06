import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaInstagram, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { useAuth } from '../../contexts/Auth/hooks';

const ModifyHeader = () => {
  const [subtitle, setSubTitle] = useState();
  const [maintitle, setMainTitle] = useState();
  const { supabaseClient } = useAuth();
  const navigate = useNavigate();

  const handleMypage = () => {
    navigate('/:userName/posts');
  };

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
      const userId = sessionData.session.user.id;

      const { data: userData, error: userError } = await supabaseClient.from('users').select().eq('id', userId);
      const SiteTitle = userData[0].siteName;

      setMainTitle(SiteTitle);
    };
    fetchData();
  }, [supabaseClient]);

  return (
    <>
      <StyledHeader>
        <StTitleWrapper>
          <Title>{maintitle}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </StTitleWrapper>
        <Btns>
          <Button onClick={handleMypage}>
            <HomeIcon />
            MyPage
          </Button>
        </Btns>
      </StyledHeader>
      <Footer>
        {' '}
        <Icon /> <Icon2 /> <Icon3 />{' '}
      </Footer>
    </>
  );
};

export default ModifyHeader;

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-top: 1px solid black;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  height: 150px;
  background-color: black;
`;
const StTitleWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-left: 120px;
  gap: 25px;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
  color: white;
`;
const SubTitle = styled.p`
  font-size: 20px;
  color: #ccc;
`;
const Btns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100px;
  height: auto;
  padding: 10px;
  margin-right: 150px;
  color: white;

  &:hover {
    background-color: #808080;
    color: white;
  }

  &:active {
    background-color: #2c2c2c;
    border-color: black;
  }
`;

const HomeIcon = styled(FaHome)`
  font-size: 25px;
  cursor: pointer;
  color: white;
`;
