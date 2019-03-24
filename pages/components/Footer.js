import React from 'react';
import { styled, Box } from '@smooth-ui/core-sc';

const FooterComponent = () => {
  return (
    <Footer>
      <Box p={{ xs: '20px', md: '50px' }}>
        <Address>Senda de los recuerdos 119, Milenio III, Querétaro, Qro 776060</Address>
        <p>
          <b>Teléfono: </b>
          <Link href="tel:+524423138637">442 313 8637</Link>
        </p>
        <p>
          <b>Correo electrónico: </b>
          <Link href="ventas@bugambilias.party">ventas@bugambilias.party</Link>
        </p>
      </Box>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
`;

const Link = styled.a`
  color: inherit;
`;

const Address = styled.address``;

export default FooterComponent;
