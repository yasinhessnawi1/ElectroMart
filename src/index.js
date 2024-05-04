// Import React and ReactDOM for creating and rendering the application
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from ReactDOM
import App from './App';
import GlobalStyles from './styles/GlobalStyles'; // Ensure the correct path to the global styles

// Get the root container element from the HTML file where the app will be mounted
const container = document.getElementById('root');

// Create a root using the createRoot API
const root = createRoot(container);

// Render the App component, wrapped in React's StrictMode for better debugging and consistency
root.render(
  <React.StrictMode>
    <GlobalStyles /> {/* Inject global styles at the top level */}
    <App /> {/* The main App component */}
  </React.StrictMode>,
);
