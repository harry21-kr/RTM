import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Auth/hooks';
import styled from 'styled-components';

export function PostingList() {
  const { supabaseClient, user } = useAuth();
  const [postData, setPostData] = useState([]);

  // 마운트 될때 posts 데이터 가져오기
  useEffect(() => {
    const fetchPostsData = async () => {
      if (user) {
        const { data: fetchPostsData } = await supabaseClient
          .from('posts')
          .select('id, UID, title, content, created_at, img_url')
          .eq('UID', user.user_metadata.userName);

        setPostData(fetchPostsData);
      }
    };
    fetchPostsData();
  }, [user, supabaseClient]);

  return (
    <>
      <StListWrap>
        {postData.map((post) => (
          <StPostItem key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.img_url} alt="post image"></img>
          </StPostItem>
        ))}
      </StListWrap>
    </>
  );
}

const StListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: beige;
  padding: 20px;
`;

const StPostItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  > h3 {
    grid-area: title;
    font-size: 1.3rem;
  }

  > p {
    grid-area: content;
  }

  > img {
    grid-area: image;
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
  }
`;
