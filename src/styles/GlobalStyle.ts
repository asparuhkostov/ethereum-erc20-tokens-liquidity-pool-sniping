import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .App {
    text-align: center;
  }

  html,
  body {
    background-color: #ffffff;
    background-image: linear-gradient(62deg, #ffffff 0%, #d2d2d2 100%);
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #about_container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about_info_p {
    font-size: 1.5em;
  }
`
