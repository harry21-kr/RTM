import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './Providers';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>
);
