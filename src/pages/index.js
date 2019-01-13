import React from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';

import logo from '../../public/logo.png';

// C7B334

const Index = () => (
  <Box
    width={{ sm: 1 }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    style={{
      height: '100vh',
      resize: 'both',
      textAlign: 'center',
    }}
  >
    <Box width={{ sm: 0.8, md: 0.6 }}>
      <img alt="Salón bugambilias" src={logo} />
      {/* <Typography variant="display-1">Salón bugambilias</Typography> */}
      <Typography variant="display-4" color="primary">
                Sitio en construcción
      </Typography>
      <address>Senda de los recuerdos 119, Milenio III, Querétaro, Qro 776060</address>
      <p>
                Contáctanos en
        <a href="tel:+524423138637">442 313 8637</a>
      </p>
      <p>
                O en
        <a href="ventas@bugambilias.party">ventas@bugambilias.party</a>
      </p>
    </Box>
  </Box>
);

export default Index;
