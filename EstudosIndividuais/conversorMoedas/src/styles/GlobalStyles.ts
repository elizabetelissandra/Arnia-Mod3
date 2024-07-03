// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
