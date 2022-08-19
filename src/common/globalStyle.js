import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export default GlobalStyle;
