import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, Normalize } from '@smooth-ui/core-sc';
import theme from './theme';
import { UserAgent } from './components';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let userAgent = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req) {
      const parser = require('ua-parser-js');
      userAgent = parser(ctx.req.headers['user-agent']);
    }

    return { pageProps, userAgent };
  }

  render() {
    const { Component, pageProps, userAgent } = this.props;

    return (
      <Container>
        <Normalize />
        <UserAgent.Provider value={userAgent}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserAgent.Provider>
      </Container>
    );
  }
}

export default MyApp;
