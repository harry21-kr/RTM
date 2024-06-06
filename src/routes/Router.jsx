import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/Auth/hooks';
import LoginPage from '../pages/LoginPage/LoginPage';
import ModifyPage from '../pages/ModifyPage/ModifyPage';
import MyPage from '../pages/MyPage/MyPage';

export default function Router() {
  const { session } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={session ? '/:userName/posts' : '/login'} replace={true} />} />
        <Route path="/ModifyPage" element={<ModifyPage />} />
        <Route path="/:userName/posts" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
