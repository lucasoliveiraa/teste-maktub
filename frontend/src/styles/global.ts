import { createGlobalStyle } from 'styled-components';

import backgroundLogo from '../assets/capa.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: url(${backgroundLogo}) no-repeat;
    background-size: cover;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }
  button {
    cursor: pointer;
  }
`;
