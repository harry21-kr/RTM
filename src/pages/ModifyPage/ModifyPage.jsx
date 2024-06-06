import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import WriteHeader from '../../components/Header/Modify';
import Modify from '../../components/MyPage/Modify';
import { useAuth } from '../../contexts/Auth/hooks';

export default function ModifyPage() {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

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
