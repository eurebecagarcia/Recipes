import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    outline: 0;
  }

  body{
    font-family: 'DM Sans', sans-serif;
  }

`;

export default GlobalStyle;
