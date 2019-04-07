import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { ThemeProvider, Normalize } from '@smooth-ui/core-sc';
import { UserAgent, GlobalStyle } from '../components';
import { UserAgentSingleton, pageview, theme } from '../utils';

Router.events.on('routeChangeComplete', url => pageview(url));

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let userAgentHeader = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req) {
      const parser = require('ua-parser-js');
      userAgentHeader = parser(ctx.req.headers['user-agent']);
    }

    return { pageProps, userAgentHeader };
  }

  constructor(props) {
    super(props);
    this.userAgent = new UserAgentSingleton(props.userAgentHeader);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Normalize />
        <GlobalStyle />
        <UserAgent.Provider value={this.userAgent}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserAgent.Provider>
      </Container>
    );
  }
}

export default MyApp;
