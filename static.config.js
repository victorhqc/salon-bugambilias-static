import React from 'react';
import PropTypes from 'prop-types';

const Document = ({
  Html, Head, Body, children,
}) => (
  <Html lang="en-US">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Salón bugambilias</title>
    </Head>
    <Body>{children}</Body>
  </Html>
);

Document.defaultProps = {
  children: null,
};

Document.propTypes = {
  Html: PropTypes.element.isRequired,
  Head: PropTypes.element.isRequired,
  Body: PropTypes.element.isRequired,
  children: PropTypes.node,
};

export default {
  bundleAnalyzer: !!process.env.DEBUG,
  getSiteData: () => ({
    title: 'React Static',
  }),
  plugins: ['react-static-plugin-styled-components'],
  document: Document,
};
