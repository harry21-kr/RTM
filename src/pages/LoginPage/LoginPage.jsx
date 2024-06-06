import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/background.png';
import { LoginForm } from '../../components/LoginPage';
import { useAuth } from '../../contexts/Auth/hooks';

export default function LoginPage() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to={`/${session.user.user_metadata.userName}/posts`} replace />;
  }

  return (
    <StWrapper>
      <LoginForm />
    </StWrapper>
  );
}

const StWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: -1;
  }
`;
