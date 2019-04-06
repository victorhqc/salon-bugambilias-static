import React from 'react';
import PropTypes from 'prop-types';
import { styled, Box } from '@smooth-ui/core-sc';
import { SERVICES } from './utils';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const ServiceItem = ({ src, title }) => (
  <Box width={{ xs: '50%', md: '25%' }} p={{ xs: 10, m: 15 }}>
    <img src={src} width="150px" />
    <p>{title}</p>
  </Box>
);

ServiceItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

const Services = () => (
  <Flex>
    {SERVICES.map(service => (
      <ServiceItem key={service.title} {...service} />
    ))}
  </Flex>
);

export default Services;
