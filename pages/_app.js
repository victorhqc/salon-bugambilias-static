import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider, Normalize } from '@smooth-ui/core-sc';
import { DefaultSeo } from 'next-seo';
import { UserAgent, GlobalStyle } from '../components';
import { UserAgentSingleton, pageview, theme } from '../utils';
import SEO from '../next-seo.config';

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
      <>
        <DefaultSeo openGraph={SEO.openGraph} />
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Normalize />
        <GlobalStyle />
        <UserAgent.Provider value={this.userAgent}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserAgent.Provider>
      </>
    );
  }
}

export default MyApp;
