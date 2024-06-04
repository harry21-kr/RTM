import { Provider as ReduxProvider } from 'react-redux';
import AuthProvider from './contexts/Auth/AuthContext';
import ModalProvider from './contexts/Modal/ModalContext';
import store from './store/store';

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}
