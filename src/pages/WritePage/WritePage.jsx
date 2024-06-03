import { useAuth } from '../../contexts/Auth/hooks';

export default function WritePage() {
  const { supabaseClient, session } = useAuth();

  async function handlePosting() {
    const { error } = await supabaseClient
      .from('posts')
      .insert({ title: '아무 제목', content: '아무 내용', UID: session.user.id });

    if (error) {
      throw new Error(error);
    }
  }

  return (
    <div>
      <form>
        <button
          onClick={(e) => {
            e.preventDefault();
            handlePosting();
          }}
        >
          글 쓰기
        </button>
      </form>
    </div>
  );
}
