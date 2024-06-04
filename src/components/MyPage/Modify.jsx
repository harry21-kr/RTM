import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';

export default function Modify() {
  const { supabaseClient, user } = useAuth();

  return (
    <StModify>
      <Label>Name</Label>
      <Label>SiteName</Label>
      <Label>Email</Label>
      <Label>PW</Label>
      <Label>Comment</Label>
      <ModifyButton>수정하기</ModifyButton>
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
