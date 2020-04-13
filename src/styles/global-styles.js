import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Lora&display=swap');

  :root {
    --primaryColor: #FFE5FB;
    --secondaryColor: #1A1A1A;

    --textColor: #DEDEDE;
    --menuColor: #E6E6E6;
  }

  *, *::before, *::after {
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    background: #0d0d0d;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--textColor);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #FFE5FB;
  }

  p {
    font-size: 1.6rem;
    font-family: 'Lora', serif;
    line-height: 1.6em;
  }
`
