import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './Providers';
import GlobalStyles from './components/GlobalStyles';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyles />
      <Router />
    </Providers>
  </React.StrictMode>
);
