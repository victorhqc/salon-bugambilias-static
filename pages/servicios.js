import React, { Fragment } from 'react';
import Head from 'next/head';
import { Typography, Box } from '@smooth-ui/core-sc';

import {
  Content,
  Footer,
  NavigationHeader,
  PageWrapper,
  NavigationOffset,
  Services,
} from './components';

const AcercaDe = () => (
  <Fragment>
    <Head>
      <title>Salón bugambilias - Acerca de</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Content>
      <NavigationHeader />
      <NavigationOffset />
      <PageWrapper>
        <section>
          <Typography variant="h2" color="primary">
            Te ofrecemos nuestros servicios de paquetes
            <br />
            <small>Todo incluido para realizar tu evento.</small>
          </Typography>
          <Box pt={{ xs: 30, md: 50 }}>
            <Services />
          </Box>
        </section>
      </PageWrapper>
    </Content>
    <Footer />
  </Fragment>
);

export default AcercaDe;
