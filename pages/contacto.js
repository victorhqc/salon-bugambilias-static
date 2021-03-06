import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { styled, Typography, Box } from '@smooth-ui/core-sc';
import { NextSeo } from 'next-seo';

import {
  Content,
  Footer,
  NavigationHeader,
  PageWrapper,
  NavigationOffset,
  GoogleMaps,
  withUserAgent,
} from '../components';
import { event } from '../utils';

const Link = styled.a`
  color: inherit;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 20px;
`;

const Contacto = ({ isMobileDevice }) => {
  const onWhatsapp = useCallback(() => {
    event({
      action: 'contact_type',
      category: 'Contact',
      label: 'Whatsapp',
    });
  }, []);
  const onEmail = useCallback(() => {
    event({
      action: 'contact_type',
      category: 'Contact',
      label: 'Email',
    });
  }, []);

  return (
    <Fragment>
      <NextSeo
        config={{
          title: 'Salón bugambilias, contáctanos',
          description: `
Llámanos de lunes a viernes por teléfono o whatsapp al 442 313 8637 o por correo electrónico
israel_bugam@hotmail.com.

Estamos ubicados en Senda de los recuerdos 119, Milenio III, Querétaro, Qro 776060
`,
        }}
      />
      <Head>
        <title>Salón bugambilias - Contáctanos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Content>
        <NavigationHeader />
        <NavigationOffset />
        <PageWrapper>
          <Typography variant="h2" color="primary" m={{ md: '50px 0', xs: '20px 0' }}>
            Contáctanos
          </Typography>
          <p>
            Llámanos de lunes a viernes de <i>9:00am a 7:00pm</i> o envíanos un mensaje en Whatsapp
            o correo electrónico.
          </p>
          <Box mb={{ md: '20px', xs: '10px' }}>
            <LinkWrapper>
              <Img src="/icons/whatsapp_logo.svg" alt="Whatsapp Logo" width={60} />
              <Link href="https://wa.me/5214423138637" onClick={onWhatsapp}>
                442 313 8637
              </Link>
            </LinkWrapper>
          </Box>
          <Box mb={{ md: '20px', xs: '10px' }}>
            <LinkWrapper>
              <Img src="/icons/email.svg" alt="Correo electrónico" width={60} />
              <Link
                href="mailto:israel_bugam@hotmail.com?subject=Pregunta sobre Salón Bugambilias"
                onClick={onEmail}
              >
                israel_bugam@hotmail.com
              </Link>
            </LinkWrapper>
          </Box>
          <GoogleMaps />
        </PageWrapper>
      </Content>
      <Footer />
    </Fragment>
  );
};

Contacto.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(Contacto);
