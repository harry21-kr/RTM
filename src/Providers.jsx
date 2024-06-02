import { Provider as ReduxProvider } from 'react-redux';
import AuthProvider from './contexts/Auth/AuthContext';
import store from './store/store';

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  );
}
