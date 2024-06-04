import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';
import { addUserToTable } from '../MyPage/AddUserToTable';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  const { session, supabaseClient } = useAuth();

  const navigate = useNavigate();

  async function handleSignUp(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: { data: { userName: email.split('@')[0] } }
    });

    if (error) {
      setIsFailedLogin(true);
      console.error('Sign up error:', error.message);
      throw new Error(error.message);
    } else if (data) {
      alert('성공적으로 회원가입 되었습니다!');
      console.log(data);
      await addUserToTable(supabaseClient, data.user, password); // user 객체에서 id 사용
    }
  }

  async function handleLogin(email, password) {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      setIsFailedLogin(true);
      throw new Error(error.message);
    }

    alert('성공적으로 로그인 되었습니다!');
  }

  useEffect(() => {
    if (session) {
      navigate(`/${session.user.user_metadata.userName}/posts`, { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <StFormWrapper>
      <StInput
        type="email"
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
      <StButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (mode === 'login') {
            handleLogin(email, password);
          } else if (mode === 'signUp') {
            handleSignUp(email, password);
          }
        }}
      >
        {mode === 'login' && 'Login'}
        {mode === 'signUp' && 'Sign up'}
      </StButton>
      <StText>
        {mode === 'login' && (
          <>
            아직 회원가입을 하지 않으셨나요? <span onClick={() => setMode('signUp')}>회원가입 하기</span>
          </>
        )}
        {mode === 'signUp' && (
          <>
            이미 회원이신가요? <span onClick={() => setMode('login')}>로그인하기</span>
          </>
        )}
      </StText>
      <StFailedText>{isFailedLogin && '아이디나 비밀번호를 다시 한번 확인해주세요.'}</StFailedText>
    </StFormWrapper>
  );
}

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
`;

const StInput = styled.input`
  font-size: 25px;
  min-width: 473px;
  padding: 16px 24px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
`;

const StButton = styled.button`
  width: 100%;
  min-height: 56px;
  font-size: 20px;
  color: white;
  padding: 13px 36px;
  background-color: black;
  border: none;
  border-radius: 8px;
`;

const StText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #808080;

  & > span {
    color: #0386ff;
    font-weight: bold;
    cursor: pointer;
  }
`;

const StFailedText = styled.p`
  color: red;
  text-align: center;
`;
