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
  ImageGallery,
} from './components';

const images = [
  {
    src: 'vista_de_mesa.jpg',
    alt: 'Mesa redonda para 10 personas, con bonito centro de mesa.',
  },
  {
    src: 'centro_de_mesa.jpg',
    alt: 'Mesa redonda para 10 personas, con bonito centro de mesa.',
  },
  {
    src: 'mesa_de_dulces.jpg',
    alt: 'Mesa con dulces y bocadillos para los invitados.',
  },
  {
    src: 'vista_salon.jpg',
    alt:
      'Mesas listas para comenzar la fiesta. Al fondo puede verse la mesa con dulces y la mesa de buffet.',
  },
  {
    src: 'mesa_de_buffet.jpg',
    alt: 'La mesa con buffet ofrece diferentes opciones de comida para los invitados.',
  },
];

export const DESKTOP_IMAGES = images.map(image => ({
  ...image,
  src: require(`../images/desktop/${image.src}`),
}));

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
        <section>
          <ImageGallery images={DESKTOP_IMAGES} height={600} />
        </section>
      </PageWrapper>
    </Content>
    <Footer />
  </Fragment>
);

export default AcercaDe;
