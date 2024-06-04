import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';

export default function Modify() {
  const { supabaseClient, user } = useAuth();
  const emailRef = useRef('');
  const commentRef = useRef('');

  // 데이터 수정하기
  const handleModify = async () => {
    if (user) {
      const email = emailRef.current.value;
      const comment = commentRef.current.value;
      await supabaseClient.from('users').update({ email, comment }).eq('id', user.id);
    }
  };

  // 마운트될때 user 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const { data } = await supabaseClient.from('users').select('email, comment').eq('id', user.id).single();
        if (data) {
          if (emailRef.current) emailRef.current.value = data.email;
          if (commentRef.current) commentRef.current.value = data.comment;
        }
      }
    };
    fetchUserData();
  }, [user, supabaseClient]);

  return (
    <StModify>
      <Label>Name</Label>
      <input type="text" />
      <Label>SiteName</Label>
      <input type="text" />
      <Label>Email</Label>
      <input type="email" ref={emailRef} />
      <Label>PW</Label>
      <input type="password" />
      <Label>Comment</Label>
      <input type="text" ref={commentRef} />
      <ModifyButton onClick={handleModify}>수정하기</ModifyButton>
    </StModify>
  );
}

const StModify = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  width: 20rem;
  border: solid 1px black;
  position: relative;
`;

const Label = styled.p`
  grid-column: 1;
  margin: 10px;
  border-right: 1px solid #ccc;
  padding-left: 10px;
`;

const ModifyButton = styled.button`
  grid-row: 6;
  grid-column: 1 / 3;
  justify-self: center;
  margin: 5px;
`;
