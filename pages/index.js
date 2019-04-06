import React, { Fragment } from 'react';
import Head from 'next/head';
import { styled, Typography, Box } from '@smooth-ui/core-sc';

import { Content, Footer, NavigationHeader, ImageFade, PageWrapper } from '../components';

import weddingPicture from '../images/wedding/mobile/wedding_11.jpg';
import kidsPartyPicture from '../images/kids_party/mobile/kids_party_7.jpg';

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

const Index = () => (
  <Fragment>
    <Head>
      <title>Salón bugambilias</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
              <Img src={weddingPicture} />
            </Box>
            <Box width={{ md: '50%', xs: '100%' }} height={{ md: '400px', xs: '300px' }}>
              <Img src={kidsPartyPicture} />
            </Box>
          </Flex>
        </section>
      </PageWrapper>
    </Content>
    <Footer />
  </Fragment>
);

export default Index;
