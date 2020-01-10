import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Typography, styled } from '@smooth-ui/core-sc';
import { NavigationHeader, Content, PageWrapper, NavigationOffset, Footer } from '../components';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  renderError() {
    const { statusCode } = this.props;

    switch (statusCode) {
      case 404:
        return <Error404 />;
      default:
        return <GenericError />;
    }
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Fragment>
        <Head>
          <title>
            {statusCode}
            {' - '}Salón bugambilias
          </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Content>
          <NavigationHeader />
          <NavigationOffset />
          <PageWrapper>
            <ErrorWrapper>{this.renderError()}</ErrorWrapper>
          </PageWrapper>
        </Content>
        <Footer />
      </Fragment>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

const Error404 = () => (
  <Fragment>
    <Typography variant="h1" color="primary">
      404
    </Typography>
    <Typography variant="h4" color="primary">
      Página no encontrada.
    </Typography>
  </Fragment>
);

const GenericError = () => (
  <Fragment>
    <Typography variant="h1" color="primary">
      Algo anda mal en el sitio.
    </Typography>
    <Typography variant="h4" color="primary">
      Intenta cargar la página nuevamente.
    </Typography>
  </Fragment>
);

const ErrorWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export default Error;
