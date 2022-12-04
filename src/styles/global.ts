import { createGlobalStyle } from "styled-components";
import { transparentize } from "polished";

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

  .react-modal-overlay {
    position: fixed;
    top: 0; right: 0;
    bottom: 0; left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${transparentize(0.3, "#000000")};
  }

  .react-modal-container {
    background: var(--shape);
    border: solid 1px var(--border);
    border-radius: 0.3rem;
    position: relative;
    padding: 2rem;
    height: 200px;
  }

  .react-modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1rem;
    width: 2rem;
    height: auto;
    border: none;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;