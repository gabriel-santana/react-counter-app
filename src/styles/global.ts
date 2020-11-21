import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #2b2d42 ;
    -webkit-font-smoothing: antialiased
  }
  body, button {
    font: 16px "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
