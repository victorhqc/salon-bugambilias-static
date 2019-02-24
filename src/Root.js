import React from 'react';
import PropTypes from 'prop-types';
import { Root as StaticRoot } from 'react-static';
import { ThemeProvider, Normalize } from '@smooth-ui/core-sc';
// import { GlobalStyle } from './components';
import theme from './theme';

function Root({ children }) {
  return (
    <StaticRoot>
      <Normalize />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StaticRoot>
  );
}

Root.defaultProps = {
  children: null,
};

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;