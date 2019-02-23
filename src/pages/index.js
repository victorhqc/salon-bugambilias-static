import React, { Fragment } from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';

import { NavigationHeader } from '../components';
import Slipsum from '../components/Slipsum';

// C7B334

const Index = () => (
  <Fragment>
    <NavigationHeader />
    <div>
      <Box
        width={{ sm: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          // height: '100vh',
          resize: 'both',
          textAlign: 'center',
        }}
      >
        <Box width={{ sm: 0.8, md: 0.6 }}>
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
          <Slipsum />
        </Box>
      </Box>
    </div>
  </Fragment>
);

export default Index;
