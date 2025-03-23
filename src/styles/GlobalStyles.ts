import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'RubikBubbles';
    src: url('../assets/fonts/RubikBubbles-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'RubikBubbles', cursive;
  }

  button {
    cursor: pointer;
  }

  html {
    scroll-behavior: smooth;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }
`;

export default GlobalStyles; 