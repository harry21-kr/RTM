import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';
import { useModal } from '../../contexts/Modal/useModal';

export default function PostModal() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImgFile, setPostImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const [_, closeModal] = useModal();
  const { session, supabaseClient } = useAuth();

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

    const { error } = await supabaseClient.from('posts').insert({
      UID: session.user.user_metadata.userName,
      title: postTitle,
      content: postContent,
      img_url: publicUrl
    });

    if (error) {
      throw new Error(error);
    }

    alert('포스팅 완료!');
    closeModal();
  }

  return (
    <StFormWrapper onSubmit={handlePost}>
      <label htmlFor="postImage">
        <StPrevImgWrapper>
          {previewUrl ? (
            <img src={previewUrl} alt="미리보기 이미지" width={360} height={180} />
          ) : (
            <p>이미지 가져오기</p>
          )}
        </StPrevImgWrapper>
      </label>
      <StFileInput type="file" id="postImage" accept="image/*" onChange={handleImageChange} />
      <input
        type="text"
        value={postTitle}
        placeholder="제목을 입력해주세요."
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <input
        type="text"
        value={postContent}
        placeholder="간략한 소개글을 작성해주세요."
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button type="submit">포스팅하기</button>
      <button onClick={closeModal}>모달창 닫기</button>
    </StFormWrapper>
  );
}

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`;

const StPrevImgWrapper = styled.div`
  width: 360px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const StFileInput = styled.input`
  display: none;
`;
