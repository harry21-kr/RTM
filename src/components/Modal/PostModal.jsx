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

  function handleEnableEditMode() {
    setIsEditMode(true);
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
      <img src={prevImg_url} width={200} height={200} />
      {isEditMode ? (
        <>
          <input
            type="text"
            value={editedData.title}
            onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
          />
          <input
            type="text"
            value={editedData.content}
            onChange={(e) => setEditedData({ ...editedData, content: e.target.value })}
          />
        </>
      ) : (
        <>
          <p>{editedData.title}</p>
          <p>{editedData.content}</p>
        </>
      )}
      <button
        onClick={isEditMode ? handleEditPost : handleEnableEditMode}
        disabled={isEditMode && prevTitle === editedData.title && prevContent === editedData.content}
      >
        수정하기
      </button>
      <button onClick={handleDeletePost}>삭제하기</button>
      <button onClick={closeModal}>모달 닫기</button>
    </StModalWrapper>
  );
}

const StModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
