import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import film from '../../assets/background2.png';
import ModifyHeader from '../../components/Header/ModifyHeader';
import Modify from '../../components/MyPage/Modify';
import { useAuth } from '../../contexts/Auth/hooks';

export default function ModifyPage() {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

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
