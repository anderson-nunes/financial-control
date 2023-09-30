import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-boxs;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
  /* background-color: ${(props) => props.theme["gray-800"]}; */
  background-color: ${({ theme }) => theme.background};
  color: ${(props) => props.theme["gray-100"]};
  -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif;
  }
`;
