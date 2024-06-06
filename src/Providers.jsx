import { Provider as ReduxProvider } from 'react-redux';
import store from './Redux/Config/configureStore';
import AuthProvider from './contexts/Auth/AuthContext';
import ModalProvider from './contexts/Modal/ModalContext';

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}
