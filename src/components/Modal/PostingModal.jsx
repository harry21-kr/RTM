import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../Redux/Slices/PostsSlice';
import { useAuth } from '../../contexts/Auth/hooks';
import { useModal } from '../../contexts/Modal/useModal';

export default function PostingModal() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImgFile, setPostImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const { session, supabaseClient } = useAuth();
  const [_, closeModal] = useModal();

  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const fileObj = event.target.files[0];
    setPostImgFile(fileObj);
    const objectUrl = URL.createObjectURL(fileObj);
    setPreviewUrl(objectUrl);
  };

  async function handlePost(e) {
    e.preventDefault();
    const { data: imgData, error: imgError } = await supabaseClient.storage
      .from('posts')
      .upload(`thumbnail/${Date.now()}`, postImgFile);

    if (imgError) {
      throw new Error(imgError);
    }

    const {
      data: { publicUrl }
    } = supabaseClient.storage.from('posts').getPublicUrl(imgData.path);

    const newPost = {
      id: uuidv4(),
      UID: session.user.user_metadata.userName,
      title: postTitle,
      content: postContent,
      img_url: publicUrl
    };

    const { error } = await supabaseClient.from('posts').insert(newPost);

    if (error) {
      throw new Error(error);
    }

    dispatch(addPost(newPost));
    alert('포스팅 완료!');
    closeModal();
  }

  return (
    <StFormWrapper onSubmit={handlePost}>
      <label htmlFor="postImage">
        <StPrevImgWrapper>
          {previewUrl ? (
            <StPrevImg src={previewUrl} alt="미리보기 이미지" width={360} height={200} />
          ) : (
            <p>이미지를 추가해주세요.</p>
          )}
        </StPrevImgWrapper>
      </label>
      <StFileInput type="file" id="postImage" accept="image/*" onChange={handleImageChange} />
      <StInput
        type="text"
        value={postTitle}
        placeholder="제목을 입력해주세요."
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <StInput
        type="text"
        value={postContent}
        placeholder="사진에 대한 간략한 글을 작성해주세요."
        onChange={(e) => setPostContent(e.target.value)}
      />
      <StButtonWrapper>
        <StButton type="submit" disabled={!postTitle || !postContent || !postImgFile}>
          포스팅하기
        </StButton>
        <StButton type="button" onClick={closeModal}>
          닫기
        </StButton>
      </StButtonWrapper>
    </StFormWrapper>
  );
}

const StFormWrapper = styled.form`
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

const StPrevImgWrapper = styled.div`
  width: 360px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    opacity: 0.7;
    color: black;
  }
`;

const StPrevImg = styled.img`
  border-radius: 8px;
`;

const StFileInput = styled.input`
  display: none;
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
