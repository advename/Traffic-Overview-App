import { createGlobalStyle } from "styled-components";

// Formatting doesn't work ATM due to a bug: https://github.com/styled-components/vscode-styled-components/issues/175

export const GlobalStyle = createGlobalStyle`

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  // CSS-Reset
  *,
  *:before,
  *:after {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    padding: 0px;
    box-sizing: border-box;
    color: rgb(24, 24, 24);
  }
  #app{
    width: 100vw;
    max-width: 100%;
  }
`;
