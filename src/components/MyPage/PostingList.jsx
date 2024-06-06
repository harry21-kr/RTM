import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PostItem from './PostItem';
import UseFetchPosts from './hooks/UseFetchPosts';

export function PostingList() {
  const posts = useSelector((state) => state.posts.posts);

  UseFetchPosts(); // 커스텀 훅 호출

  return (
    <>
      <StListWrap>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
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
