import React, { Fragment } from 'react';
import Head from 'next/head';
import { Typography } from '@smooth-ui/core-sc';

import { NavigationHeader, ImageFade, PageWrapper } from './components';

const Index = () => (
  <Fragment>
    <Head>
      <title>Salón bugambilias</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavigationHeader color="#fff" />
    <div>
      <ImageFade />
      <PageWrapper>
        <Typography variant="h1" color="primary">
          Salón bugambilias
        </Typography>
        <p>
          En Salón de eventos Bugambilias, te ofrecemos servicios para realizar todo tipo de eventos
          como:
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
          Tu experiencia en Salón Bugambilias será inolvidable, dentro de un ambiente maravilloso y
          único.
        </p>
        <address>Senda de los recuerdos 119, Milenio III, Querétaro, Qro 776060</address>
        <p>
          Contáctanos en
          <a href="tel:+524423138637">442 313 8637</a>
        </p>
        <p>
          O en
          <a href="ventas@bugambilias.party">ventas@bugambilias.party</a>
        </p>
      </PageWrapper>
    </div>
  </Fragment>
);

export default Index;
