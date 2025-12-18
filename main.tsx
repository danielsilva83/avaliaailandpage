import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';

const rootElement = document.getElementById('landpage-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
}