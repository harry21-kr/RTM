import styled from 'styled-components';
import { useModal } from '../../contexts/Modal/useModal';
import PostModal from '../Modal/PostModal';

export default function PostItem({ post }) {
  const [openModal] = useModal(<PostModal post={post} />);

  return (
    <>
      <StPostItem
        onClick={() => {
          openModal();
        }}
      >
        <img src={post.img_url} alt="post image"></img>
        <PostHeader>
          <h3>{post.title}</h3>
          <button>♥️</button>
        </PostHeader>
        <p>{post.content}</p>
      </StPostItem>
    </>
  );
}

const StPostItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 5px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  > p {
    grid-area: content;
  }

  > img {
    grid-area: image;
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2.3rem;
    color: #000000;

    &:hover {
      color: #e50000;
    }
  }
`;
