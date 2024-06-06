import styled from 'styled-components';
import { useModal } from '../../contexts/Modal/useModal';
import PostModal from '../Modal/PostModal';

export default function PostItem({ post }) {
  const [openModal] = useModal(<PostModal post={post} />);

  return (
    <StPostItem
      onClick={() => {
        openModal();
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <img src={post.img_url} alt="post image"></img>
    </StPostItem>
  );
}

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
  cursor: pointer;

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
