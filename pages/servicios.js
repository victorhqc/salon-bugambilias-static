import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography, Box } from '@smooth-ui/core-sc';

import {
  Content,
  Footer,
  NavigationHeader,
  PageWrapper,
  NavigationOffset,
  Services,
  ImageGallery,
  withUserAgent,
  loadGalleryImages,
} from './components';

const Servicios = ({ isMobileDevice }) => {
  const height = isMobileDevice ? '300px' : '600px';
  const images = loadGalleryImages('kids_party', isMobileDevice ? 'mobile' : 'desktop');

  return (
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
          <section>
            <ImageGallery images={images} height={height} />
          </section>
        </PageWrapper>
      </Content>
      <Footer />
    </Fragment>
  );
};

Servicios.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(Servicios);
