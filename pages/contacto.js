import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { styled, Typography, Box } from '@smooth-ui/core-sc';

import {
  Content,
  Footer,
  NavigationHeader,
  PageWrapper,
  NavigationOffset,
  GoogleMaps,
  withUserAgent,
} from './components';

import whatsappLogo from '../images/icons/whatsapp_logo.svg';
import email from '../images/icons/email.svg';

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
  return (
    <Fragment>
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
            Llámanos de lunes a viernes de <i>8:00am a 7:00pm</i> o envíanos un mensaje en Whatsapp
            o correo electrónico.
          </p>
          <Box mb={{ md: '20px', xs: '10px' }}>
            <LinkWrapper>
              <Img src={whatsappLogo} alt="Whatsapp Logo" width={60} />
              <Link href="https://wa.me/5214423138637">442 313 8637</Link>
            </LinkWrapper>
          </Box>
          <Box mb={{ md: '20px', xs: '10px' }}>
            <LinkWrapper>
              <Img src={email} alt="Correo electrónico" width={60} />
              <Link href="ventas@bugambilias.party">ventas@bugambilias.party</Link>
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
