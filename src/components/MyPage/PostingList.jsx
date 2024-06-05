import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useModal } from '../../contexts/Modal/useModal';
import PostModal from '../Modal/PostModal';
import UseFetchPosts from './hooks/UseFetchPosts';

export function PostingList() {
  const posts = useSelector((state) => state.posts.posts);
  const [selectedPostData, setSelectedPostData] = useState({});
  const [openModal] = useModal(<PostModal data={selectedPostData} />);

  UseFetchPosts(); // 커스텀 훅 호출

  return (
    <>
      <StListWrap>
        {posts.map((post) => (
          <StPostItem
            key={post.id}
            onClick={() => {
              setSelectedPostData(post);
              openModal();
            }}
          >
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
