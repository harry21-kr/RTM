import { Provider } from 'react-redux';
import AuthProvider from './contexts/Auth/AuthContext';
import ModalProvider from './contexts/Modal/ModalContext';
import store from './Redux/Config/configureStore';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </Provider>
  );
}
