import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageHeader from './MyPage';
import WriteHeader from './Modify';
import { FaHome, FaInstagram, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import SiteLogo from '../../assets/SiteLogo.png';

const LoginHeader = () => {
  return (
    <>
      <StyledHeader>
        <StLogo src={SiteLogo} alt="Profile" />
      </StyledHeader>
      <Footer>
        {' '}
        <Icon /> <Icon2 /> <Icon3 />{' '}
      </Footer>
    </>
  );
};

export default LoginHeader;

const StLogo = styled.img`
  width: 650px;
  height: 120px;
  display: flex;
  align-items: center;
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
  background-color: #000000;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 14px;
`;

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

const Btns = styled.div`
  position: absolute;
  right: 250px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
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
