import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { styled, Typography, Box, Breakpoint } from '@smooth-ui/core-sc';

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
} from '../components';

const ServicesWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  margin: ${({ size }) => (size === 'big' ? '0 -50px' : '0 -20px')};
`;

const supportTextMargin = { md: '25px 0', xs: '10px 0' };

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
            <Typography variant="h2" color="primary" m={{ md: '50px 0', xs: '20px 0' }}>
              Te ofrecemos nuestros servicios de paquetes
              <br />
              <small>Todo incluido para realizar tu evento.</small>
            </Typography>
            <Breakpoint up="md">
              <ServicesWrapper size="big">
                <Services />
              </ServicesWrapper>
            </Breakpoint>
            <Breakpoint down="md">
              <ServicesWrapper>
                <Services />
              </ServicesWrapper>
            </Breakpoint>
          </section>
          <section>
            <Typography variant="h2" color="primary" m={supportTextMargin}>
              Instalaciones
            </Typography>
            <Typography as="p" width={{ md: '65%' }}>
              Nuestro salón de <b>854 metros cuadrados</b> tiene un cupo máximo para{' '}
              <b>200 personas.</b> Contamos con servicio de meseros profesionales y sistema para DJ.
            </Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={premisesImages} height={height} nextDelay={2000} />
            </Box>
          </section>
          <section>
            <Typography variant="h2" color="primary" m={supportTextMargin}>
              Eventos infantiles
            </Typography>
            <Typography as="p" width={{ md: '65%' }}>
              Todo lo que necesitas para eventos infantiles. Arreglo de globos, juegos infantiles y
              juegos inflables.
            </Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={kidsdPartyImages} height={height} />
            </Box>
          </section>
          <section>
            <Typography variant="h2" color="primary" m={supportTextMargin}>
              Bodas
            </Typography>
            <Typography as="p" width={{ md: '65%' }}>
              Ten tu boda de ensueño y sin preocupaciones. Decoramos el salón con los colores de tu
              preferencia, así como arreglos florales y decorativos.
            </Typography>
            <Box mt={{ xs: 15, md: 30 }}>
              <ImageGallery images={weddingImages} height={height} nextDelay={1000} />
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
