import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth !important;
  }

  body {
    font-family: var(--font-base), sans-serif;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
