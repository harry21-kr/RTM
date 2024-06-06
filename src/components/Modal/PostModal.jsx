import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deletePost, editPost } from '../../Redux/Slices/PostsSlice';
import { useAuth } from '../../contexts/Auth/hooks';
import { useModal } from '../../contexts/Modal/useModal';

export default function PostModal({ post }) {
  const { id: prevId, title: prevTitle, content: prevContent, img_url: prevImg_url, created_at: prevCreated_at } = post;

  const { supabaseClient } = useAuth();

  const [editedData, setEditedData] = useState({
    id: prevId,
    title: prevTitle,
    content: prevContent,
    img_url: prevImg_url,
    created_at: prevCreated_at
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const [_, closeModal] = useModal();

  const dispatch = useDispatch();

  function handleToggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  async function handleEditPost() {
    if (confirm('정말 게시물을 수정하시겠어요?')) {
      const { error } = await supabaseClient
        .from('posts')
        .update({ ...editedData })
        .eq('id', prevId);
      if (error) {
        throw new Error(error);
      }
      dispatch(editPost(editedData));
      alert('수정이 완료되었습니다.');
    } else {
      setEditedData(post);
    }
    setIsEditMode(false);
  }

  async function handleDeletePost() {
    if (confirm('정말 게시물을 삭제하시겠어요?')) {
      await supabaseClient.from('posts').delete().eq('id', prevId);
      dispatch(deletePost({ id: prevId }));
      alert('삭제가 완료되었습니다.');
      closeModal();
    }
  }

  return (
    <StModalWrapper>
      <StImg src={prevImg_url} width={360} height={200} />
      {isEditMode ? (
        <>
          <StInput
            type="text"
            value={editedData.title}
            onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
          />
          <StInput
            type="text"
            value={editedData.content}
            onChange={(e) => setEditedData({ ...editedData, content: e.target.value })}
          />
        </>
      ) : (
        <>
          <StTitle>{editedData.title}</StTitle>
          <p>{editedData.content}</p>
        </>
      )}
      <StButtonWrapper>
        <StButton
          onClick={isEditMode ? handleEditPost : handleToggleEditMode}
          disabled={isEditMode && prevTitle === editedData.title && prevContent === editedData.content}
        >
          수정하기
        </StButton>
        {!isEditMode && <StButton onClick={handleDeletePost}>삭제하기</StButton>}
        <StButton onClick={isEditMode ? handleToggleEditMode : closeModal}>{isEditMode ? '취소' : '닫기'} </StButton>
      </StButtonWrapper>
    </StModalWrapper>
  );
}

const StModalWrapper = styled.div`
  width: 600px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: white;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StImg = styled.img`
  border-radius: 8px;
`;

const StTitle = styled.h3`
  font-size: 24px;
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const StButton = styled.button`
  min-width: 80px;
  height: 32px;

  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

const StInput = styled.input`
  min-width: 260px;
  height: 32px;
  padding: 0px 12px;
  border: 1px solid black;
  border-radius: 6px;
  outline: none;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
