import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --background: #181B23;
    --shape: #1F2029;
    
    --text-selected: #DDE2FF;
    
    --confirm: #3083DC;
    --success: #248232;
    --danger: #FF220C;

    --border: #353646;

    --black: #181B23;
    --white: #EEEEF2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;