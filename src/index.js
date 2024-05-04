import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import GlobalStyles from './styles/globalStyles'; // Ensure the path is correct

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
