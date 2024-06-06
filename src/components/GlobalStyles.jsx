import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}

 :root {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 500;
  font-style: normal;
    }
`;

export default GlobalStyles;
