// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root !== null && root !== undefined) {
  ReactDOM.createRoot(root).render(rootElement);
} else {
  console.error('Root element not found in the document.');
}
