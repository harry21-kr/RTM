import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/Auth/hooks';
import { v4 as uuidv4 } from 'uuid';

export default function Profile() {
  const { supabaseClient, user } = useAuth();
  const [profileUrl, setProfileUrl] = useState(
    'https://fiupbivkgjqqvpwaacik.supabase.co/storage/v1/object/public/profile/default-profile.png'
  );
  const [buttonText, setButtonText] = useState('Select Image');
  const [profileFile, setProfileFile] = useState(null);
  const fileInputRef = useRef(null);

  // 데이터베이스의 프로필이미지 확인
  async function checkProfile() {
    const { data } = await supabaseClient.from('users').select('profileImgURL').eq('id', user.id).single();

    if (data && data.profileImgURL) {
      setProfileUrl(data.profileImgURL);
      setButtonText('Modify Image');
    }
  }

  // 이미지 파일 선택
  async function handleFileInputChange(e) {
    const file = e.target.files[0];
    setProfileFile(file);
    if (!file) {
      return;
    }
    // 선택한 이미지 미리보기
    const previewUrl = URL.createObjectURL(file);
    setProfileUrl(previewUrl);
    await uploadProfileImage(file);
  }

  async function uploadProfileImage(file) {
    // 스토리지에 이미지 저장
    const { data } = await supabaseClient.storage.from('profile').upload(`profile_${uuidv4()}.png`, file);

    // 업로드된 이미지의 URL 생성
    const {
      data: { publicUrl }
    } = supabaseClient.storage.from('profile').getPublicUrl(data.path);

    // 데이터베이스에 imageUrl 저장
    await supabaseClient.from('users').update({ profileImgURL: publicUrl }).eq('id', user.id);

    setProfileUrl(publicUrl); // 상태를 업데이트하여 프로필 이미지 URL을 설정
  }

  useEffect(() => {
    if (user) {
      checkProfile();
    }
  }, [user]);

  return (
    <StProfile>
      <p>Profile</p>
      <StProfileImage src={profileUrl} alt="Profile Image" />
      <StInputImage
        ref={fileInputRef}
        type="file"
        id="profileImg"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()}>{buttonText}</button>
    </StProfile>
  );
}

const StProfile = styled.div`
  display: grid;
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
