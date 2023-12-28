import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

import Context from '@/components/context';
import '@/assets/scss/index.scss';

async function enableMocking() {
  try {
    // if (process.env.NODE_ENV !== 'development') {
    //   return;
    // }

    const { worker } = await import('@/lib/mocks/browser.ts');

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start(); // activate msw
  } catch (e) {
    console.log(e);
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Context.ReactQueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context.ReactQueryProvider>
    </React.StrictMode>
  );
});
