import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

import Context from '@/components/context';
import '@/assets/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.ReactQueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.ReactQueryProvider>
  </React.StrictMode>
);
