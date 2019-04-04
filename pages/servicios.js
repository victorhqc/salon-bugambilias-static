import React, { Fragment, useMemo } from 'react';
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
  const imagesType = isMobileDevice ? 'mobile' : 'desktop';
  const kidsdPartyImages = useMemo(() => loadGalleryImages('kids_party', imagesType), []);
  const weddingImages = useMemo(() => loadGalleryImages('wedding', imagesType), []);
  const premisesImages = useMemo(() => loadGalleryImages('premises', imagesType), []);

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
            <Typography variant="h2">Eventos infantiles</Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={kidsdPartyImages} height={height} />
            </Box>
          </section>
          <section>
            <Typography variant="h2">Bodas</Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={weddingImages} height={height} />
            </Box>
          </section>
          <section>
            <Typography variant="h2">Instalaciones</Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={premisesImages} height={height} />
            </Box>
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
