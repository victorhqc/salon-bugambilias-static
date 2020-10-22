import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography } from '@smooth-ui/core-sc';
import { NextSeo } from 'next-seo';

import {
  Content,
  Footer,
  NavigationHeader,
  PageWrapper,
  NavigationOffset,
  withUserAgent,
} from '../components';

const Four0Four = ({ isMobileDevice }) => {
  return (
    <Fragment>
      <NextSeo
        config={{
          title: 'Salón bugambilias - 404',
          description: 'Página no encontrada.',
        }}
      />
      <Head>
        <title>Salón bugambilias - 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Content>
        <NavigationHeader />
        <NavigationOffset />
        <PageWrapper>
          <Typography variant="h2" color="primary" m={{ md: '50px 0', xs: '20px 0' }}>
            404
          </Typography>
          <p>Página no encontrada.</p>
        </PageWrapper>
      </Content>
      <Footer />
    </Fragment>
  );
};

Four0Four.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(Four0Four);
