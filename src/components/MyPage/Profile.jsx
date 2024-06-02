import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import defaultProfileImage from '../../assets/defaultProfile.png';

export default function Profile() {
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  // 프로필 이미지 선택
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreviewUrl(e.target.result);
        localStorage.setItem('profileImage', e.target.result); // 로컬스토리지에 이미지 저장
      };
      // 파일 읽기
      reader.readAsDataURL(file);
    }
  };

  // 조건부 이미지 수정
  const handleImageModify = () => {
    fileInputRef.current.click();
    localStorage.removeItem('profileImage');
  };

  // 저장된 이미지 있으면 로컬스토리지에서 불러오기
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setPreviewUrl(savedImage);
    } else {
      setPreviewUrl(defaultProfileImage);
    }
  }, []);

  return (
    <StProfile>
      <p>Profile</p>
      <StProfileImage src={previewUrl} alt="ProfileImage" />
      <StInputImage type="file" onChange={handleImageSelect} ref={fileInputRef} />
      <button onClick={handleImageModify}>{previewUrl ? 'Modify profile image' : 'Select profile image'}</button>
    </StProfile>
  );
}

const StProfile = styled.div`
  display: grid;
  /* grid-template-rows: auto auto auto; */
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 10rem;
`;

const StProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const StInputImage = styled.input`
  display: none;
`;
