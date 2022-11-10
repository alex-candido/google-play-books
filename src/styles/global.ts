import { createGlobalStyle } from 'styled-components';
import firaCode from '../assets/fonts/FiraCode-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
      width: 0.500rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['brand-blue']};
      border-radius: 999px;
    }
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 500 ${({ theme }) =>
      theme.textSizes['title-title-s']} 'Poppins', sans-serif;
      line-height: 160%;
      border: none;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
