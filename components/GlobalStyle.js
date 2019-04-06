// import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';
// //
// const GlobalStyle = createGlobalStyle`${globalStyle()}`;
// //
// export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

/* .content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
} */

export default GlobalStyle;
