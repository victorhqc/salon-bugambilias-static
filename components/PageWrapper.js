import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@smooth-ui/core-sc';

const PageWrapper = ({ children, ...props }) => (
  <Box p={{ xs: '10px 20px', md: '20px 50px' }} {...props}>
    {children}
  </Box>
);

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
