import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../contexts/Auth/hooks';
import { initPosts } from '../../../Redux/Slices/PostsSlice';

const UseFetchPosts = () => {
  const dispatch = useDispatch();
  const { user, supabaseClient } = useAuth();
  const [calendarPosts, setCalendarPosts] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      if (user) {
        const { data: fetchPostsData } = await supabaseClient
          .from('posts')
          .select('id, UID, title, content, created_at, img_url')
          .eq('UID', user.user_metadata.userName);
        dispatch(initPosts(fetchPostsData));
        setCalendarPosts(fetchPostsData);
      }
    };
    fetchPostsData();
  }, [user, supabaseClient, dispatch]);

  return calendarPosts;
};

export default UseFetchPosts;
