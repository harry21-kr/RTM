import styled from 'styled-components';
import { LoginForm } from '../../components/LoginPage';

export default function LoginPage() {
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
