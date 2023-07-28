import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  @font-face{
    font-family: "Roboto";
    src: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
    font-style: normal;
  }
`;
