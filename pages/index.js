import React, { Fragment } from 'react';
import Head from 'next/head';
import { Typography } from '@smooth-ui/core-sc';

import { Content, Footer, NavigationHeader, ImageFade, PageWrapper } from './components';

const Index = () => (
  <Fragment>
    <Head>
      <title>Salón bugambilias</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavigationHeader color="#fff" />
    <Content>
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
            <li>Bodas</li>
            <li>XV Años</li>
            <li>Bautizos</li>
            <li>Primeras comuniones</li>
            <li>Eventos empresariales</li>
          </ul>
          <p>
            Con la mejor calidad de servicio y atención personalizada en todo momento por parte de
            nuestro personal altamente capacitado para que tu evento sea de tu total satisfacción.
          </p>
          <p>
            Tu experiencia en Salón Bugambilias será inolvidable, dentro de un ambiente maravilloso
            y único.
          </p>
        </section>
      </PageWrapper>
    </Content>
    <Footer />
  </Fragment>
);

export default Index;
