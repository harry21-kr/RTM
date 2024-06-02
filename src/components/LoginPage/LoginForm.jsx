import { useState } from 'react';
import styled from 'styled-components';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StLoginForm>
      <StInputWrapper>
        <StInput
          type="text"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StInputWrapper>
      <StButtonWrapper>
        <StButton $backgroundColor="#868686">Sign up</StButton>
        <StButton $backgroundColor="#000000">Login</StButton>
      </StButtonWrapper>
    </StLoginForm>
  );
}

const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 104px;
  justify-content: center;
  align-items: center;
`;

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StInput = styled.input`
  font-size: 25px;
  min-width: 473px;
  padding: 16px 24px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const StButton = styled.button`
  font-size: 20px;
  min-width: 145px;
  color: white;
  padding: 13px 36px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: none;
  border-radius: 8px;
`;
