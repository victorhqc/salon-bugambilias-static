import React, { Fragment } from 'react';
import { styled, Typography, Box } from '@smooth-ui/core-sc';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';

import { Content, Footer, NavigationHeader, ImageFade, PageWrapper } from '../components';

import PREMISES_PICTURE from '../images/premises/mobile/premises_1.jpg';
import WEDDING_INDEX_PICTURE from '../images/wedding/mobile/wedding_1.jpg';
import WEDDING_PICTURE from '../images/wedding/mobile/wedding_4.jpg';

const PREMISES_ALT = 'Mesas arregladas con mantelería y platos, listas para comenzar la fiesta.';
const WEDDING_INDEX_PICTURE_ALT = 'Contamos con servicio de bodas';

const Img = styled.div`
  background-size: cover;
  background-image: url(${props => props.src});
  width: 100%;
  height: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SEO_TITLE = 'Salón bugambilias, Fiestas y Eventos Sociales en Querétaro';
const SEO_DESCRIPTION = `
Contamos con servicio de Parrilla, Sala lounge, barra de alimentos, luz y sonido, manteleria,
servicio de cocina, inflables, juegos infantiles y todo para tu fiesta.
`;

const Index = () => (
  <Fragment>
    <NextSeo
      config={{
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        openGraph: {
          url: 'https://bugambilias.party/',
          title: SEO_TITLE,
          description: SEO_DESCRIPTION,
          images: [
            {
              url: PREMISES_PICTURE,
              width: 650,
              height: 432,
              alt: PREMISES_ALT,
            },
            {
              url: WEDDING_INDEX_PICTURE,
              width: 650,
              height: 432,
              alt: WEDDING_INDEX_PICTURE_ALT,
            },
          ],
        },
      }}
    />
    <LocalBusinessJsonLd
      type="EventVenue"
      id="https://bugambilias.party"
      name="Salón bugambilias"
      description={SEO_TITLE}
      url="https://bugambilias.party"
      telephone="+524423138637"
      address={{
        streetAddress: 'Senda de los recuerdos 119',
        addressLocality: 'Santiago de Querétaro',
        addressRegion: 'Qro',
        postalCode: '776060',
        addressCountry: 'MX',
      }}
      geo={{
        latitude: '20.597256',
        longitude: '-100.343215',
      }}
      images={[PREMISES_PICTURE, WEDDING_INDEX_PICTURE, WEDDING_PICTURE]}
    />
    <Content>
      <NavigationHeader color="#fff" />
      <ImageFade />
      <PageWrapper>
        <section>
          <Typography variant="h1" color="primary">
            Salón bugambilias
          </Typography>
          <p>
            En Salón de eventos Bugambilias, te ofrecemos servicios para realizar todo tipo de
            eventos como:
          </p>
          <ul>
            <li>
              <b>Bodas</b>
            </li>
            <li>
              <b>XV Años</b>
            </li>
            <li>
              <b>Bautizos</b>
            </li>
            <li>
              <b>Primeras comuniones</b>
            </li>
            <li>
              <b>Eventos empresariales</b>
            </li>
          </ul>
          <p>
            Con la mejor calidad de servicio y atención personalizada en todo momento por parte de
            nuestro personal altamente capacitado para que tu evento sea de tu total satisfacción.
          </p>
          <Typography variant="h4" color="primary" mb={{ md: '30px', xs: '15px' }}>
            Tu experiencia en Salón Bugambilias será inolvidable, dentro de un ambiente maravilloso
            y único.
          </Typography>
          <Flex>
            <Box
              pr={{ md: '10px' }}
              pb={{ xs: '10px', md: 0 }}
              width={{ md: '50%', xs: '100%' }}
              height={{ md: '400px', xs: '300px' }}
            >
              <Img src={PREMISES_PICTURE} alt={PREMISES_ALT} />
            </Box>
            <Box width={{ md: '50%', xs: '100%' }} height={{ md: '400px', xs: '300px' }}>
              <Img src={WEDDING_INDEX_PICTURE} alt={WEDDING_INDEX_PICTURE_ALT} />
            </Box>
          </Flex>
        </section>
      </PageWrapper>
    </Content>
    <Footer />
  </Fragment>
);

export default Index;
