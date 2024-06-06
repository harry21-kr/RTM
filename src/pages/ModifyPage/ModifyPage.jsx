import React from 'react';
import styled from 'styled-components';
import Modify from '../../components/MyPage/Modify';
import WriteHeader from '../../components/Header/Modify';

export default function ModifyPage() {
  return (
    <>
      <WriteHeader />
      <StWrapper>
        <Modify />
      </StWrapper>
    </>
  );
}

const StWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
