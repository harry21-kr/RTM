import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';

export default function Modify() {
  const { supabaseClient, user } = useAuth();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const commentRef = useRef('');
  const nameRef = useRef('');
  const siteNameRef = useRef('');

  // 데이터 수정하기
  const handleModify = async () => {
    if (user) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const comment = commentRef.current.value;
      const name = nameRef.current.value;
      const siteName = siteNameRef.current.value;

      await supabaseClient.from('users').update({ email, comment, name, siteName, password }).eq('id', user.id);
      await updateEmail(email);
      await updatePassword(password);
    }
    alert('수정사항이 반영되었습니다.');
  };

  // 유저 아이디(가입한 이메일) 업데이트
  const updateEmail = async (newEmail) => {
    const { error } = await supabaseClient.auth.updateUser({ email: newEmail });
    if (error) console.log(error.message);
  };

  // 유저 비밀번호 수정
  const updatePassword = async (newPassword) => {
    const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
    if (error) console.log(error.message);
  };

  // 마운트될때 user 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const { data } = await supabaseClient
          .from('users')
          .select('email, password, comment, name, siteName')
          .eq('id', user.id)
          .single();
        if (data) {
          if (emailRef.current) emailRef.current.value = data.email;
          if (passwordRef.current) passwordRef.current.value = data.password;
          if (commentRef.current) commentRef.current.value = data.comment;
          if (nameRef.current) nameRef.current.value = data.name;
          if (siteNameRef.current) siteNameRef.current.value = data.siteName;
        }
      }
    };
    fetchUserData();
  }, [user, supabaseClient]);

  return (
    <StModify>
      <Label>Name</Label>
      <Stinput type="text" ref={nameRef} />
      <Label>SiteName</Label>
      <Stinput type="text" ref={siteNameRef} />
      <Label>Comment</Label>
      <Stinput type="text" ref={commentRef} />
      <Label>Email</Label>
      <Stinput type="email" ref={emailRef} />
      <Label>PW</Label>
      <Stinput type="password" ref={passwordRef} />
      <StModifyButton onClick={handleModify}>수정하기</StModifyButton>
    </StModify>
  );
}

const StModify = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: repeat(6, 1fr);
  width: 55rem;
  height: 23rem;
  border: solid 4px black;
  position: relative;
  font-size: 1rem;
  gap: 3px;
  background-color: #000000;
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const Label = styled.p`
  grid-column: 1;
  text-align: center;
  font-weight: 600;
  border-right: 1px solid;
  border-bottom: 1px solid;
  align-content: center;
  padding: 10px;
`;

const StModifyButton = styled.button`
  grid-row: 6;
  grid-column: 1/3;
  justify-self: center;
  margin: 3px;
  background-color: white;
  color: black;
  border-radius: 15px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  font-style: normal;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const Stinput = styled.input`
  padding: 10px;
  border: 0;
  font-size: 1rem;
  border-bottom: 1px solid;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  font-style: normal;
`;
