import React from 'react';
import { StaticRoot } from 'react-static';
import { ThemeProvider } from '@smooth-ui/core-sc';
import { GlobalStyle } from './components';
import theme from './theme';

import './app.css';

function Root(children) {
  return (
    <StaticRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StaticRoot>
  );
}

export default Root;
