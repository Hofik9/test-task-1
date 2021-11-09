import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased; /* stylelint-disable-line property-no-unknown */
  }

  body {
    font-size: 1.6rem;
    background-color: #fafafa;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }

  input {
    font: inherit;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`
