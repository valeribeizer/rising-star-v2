import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadingScreen from './components/LoadingScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

