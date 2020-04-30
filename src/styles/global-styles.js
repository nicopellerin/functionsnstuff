import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --primaryColor: #FFE5FB;
    --secondaryColor: #1A1A1A;

    --textColor: #DEDEDE;
    --menuColor: #E6E6E6;
    
    --pink: #ff88aa;

    --systemFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
    height: 100%;
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 57.5%;

  }
  }

  #___gatsby {}

  body {
    height: 100%;
    background: #080808;
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

  h1 {
    font-size: 4.8rem;
    max-width: 90%;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2rem;
    color: var(--textColor);
    font-weight: 500;
    font-family: 'Lora', serif;

  }

  p {
    font-size: 1.6rem;
    font-family: 'Lora', serif;
    line-height: 1.6em;
  }

  a {
    color: var(--menuColor);
    text-decoration: none;
  }

  .language-jsx{
  background-color: #112!important;
  display: block;
  font-size: 2rem!important;
  margin: 2rem 0;
  margin-right: -1em;
  margin-left: -1em;
  padding: 1.5em 0;
  padding-right: 1em;
  padding-left: 2em;
  border-left: 0.25em solid #f99;

  @media (max-width: 500px) {
  max-width: 100%;
  margin: 0;
  }
}

.language-jsx2{
  background-color: #080808!important;
  display: block;
  font-size: 1.9rem!important;
  margin: 2rem 0;
  padding: 0.5em 0;
  width: 100%;
}

[data-reach-listbox-popover] {
    background: none;
    outline: none;
  }

[data-reach-listbox-option] {
  &:hover {
    background: var(--primaryColor);
    color: #333;
  }
}

  [data-reach-listbox-option][data-current] {
    background: var(--pink);
    color: #333; 
}
`
