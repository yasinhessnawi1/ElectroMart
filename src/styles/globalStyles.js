import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        font-size: 16px;
        color: #333;
        background-color: #f4f4f4;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #333;
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
        color: #666;
    }

    a {
        color: #0056b3;
        text-decoration: none;
        &:hover, &:focus {
            color: #003975;
            text-decoration: underline;
        }
        &:focus {
            outline: 3px solid #0056b3;
            outline-offset: 2px;
        }
    }
    input, button {
        font-family: inherit; // Ensure buttons and inputs use the same font
    }

    button {
        cursor: pointer; // All buttons should have a pointer cursor
        &:disabled {
            opacity: 0.7; // Visually indicate if a button is disabled
        }
    }
`;

export default GlobalStyles;
