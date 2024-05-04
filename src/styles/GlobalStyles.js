import { createGlobalStyle } from 'styled-components';

function rotate() {
  return `
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        font-size: 16px;
        color: #fff;  // Changed text color to white for better contrast on black background
        background-color: #000;  // Set background color to black
    }

    h1, h2, h3, h4, h5, h6 {
        color: #fff;  // Ensuring headings are also visible on black background
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    h1 { font-size: 2.25em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.75em; }
    h4 { font-size: 1.5em; }
    h5 { font-size: 1.25em; }
    h6 { font-size: 1em; }

    p {
        color: #ccc;  // Light gray color for paragraph to ensure readability
    }

    a {
        color: #1e90ff;  // Bright blue for links for better visibility
        text-decoration: none;
        &:hover, &:focus {
            color: #87ceeb;  // Lighter blue for hover and focus
            text-decoration: underline;
        }
    }

    input, button {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: #333;  // Darker background for form elements for contrast
        border: 1px solid #555;  // Slightly lighter border for visibility
    }

    button {
        background-color: #007bff;  // Bright blue for buttons
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;

        &:hover {
            background-color: #0056b3;  // Darker blue when hovered
        }

        &:active {
            transform: scale(0.98);
        }

        &:disabled {
            opacity: 0.7;
        }
    }

    .error-message {
        color: #dc3545;  // Red for error messages
    }

    .spinner {
        animation: ${rotate} 2s linear infinite;
    }
`;

export default GlobalStyles;
