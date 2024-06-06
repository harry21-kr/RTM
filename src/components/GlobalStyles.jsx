import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import background from '../assets/background2.png';

const GlobalStyles = createGlobalStyle`
 ${reset}

 :root {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 500;
  font-style: normal;
  }

`;

export default GlobalStyles;
