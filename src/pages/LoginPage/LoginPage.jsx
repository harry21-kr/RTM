import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
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
`;
