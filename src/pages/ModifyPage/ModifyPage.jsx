import React from 'react';
import styled from 'styled-components';
import Modify from '../../components/MyPage/Modify';
import ModifyHeader from '../../components/Header/ModifyHeader';
import film from '../../assets/background2.png';

export default function ModifyPage() {
  return (
    <>
      <ModifyHeader />
      <StWrapper>
        <Modify />
      </StWrapper>
    </>
  );
}

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin: 110px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${film});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1;
  }
`;
