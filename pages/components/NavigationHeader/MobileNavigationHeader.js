import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { styled } from '@smooth-ui/core-sc';
import Color from 'color';
import Octicon, { Grabber } from '@githubprimer/octicons-react';
import { PAGES } from './utils';

const OPENED = 'OPENED';
const CLOSED = 'CLOSED';

const ToggleButton = ({ status, setStatus }) => (
  <Button
    role="navigation"
    onClick={toggleOpenMenu(setStatus)}
    title={status === OPENED ? 'Cierra el menú' : 'Abre el menú'}
  >
    <OcticonWrapper>
      <Octicon size="medium" icon={Grabber} />
    </OcticonWrapper>
  </Button>
);

ToggleButton.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
};

const MobileNavigationHeader = () => {
  const [status, setStatus] = useState(CLOSED);

  return (
    <Header>
      <Flex>
        <a href="/">
          <img alt="Salón bugambilias" src={require('../../../images/logo.png')} height="50" />
        </a>
        <ToggleButton setStatus={setStatus} />
      </Flex>
      {status === OPENED ? (
        <Nav>
          {PAGES.map(page => (
            <Link href={page.href} passHref key={page.href}>
              <NavElement>{page.title}</NavElement>
            </Link>
          ))}
        </Nav>
      ) : null}
    </Header>
  );
};

function toggleOpenMenu(setStatus) {
  return () => {
    setStatus(state => {
      if (state === CLOSED) {
        return OPENED;
      }

      return CLOSED;
    });
  };
}

const Header = styled.header`
  margin: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
`;

const OcticonWrapper = styled.div`
  padding: 0 10px;
  background-color: ${({ theme }) =>
    Color(theme.primary)
      .alpha(0.3)
      .rgb()
      .string()};
`;

const Nav = styled.nav`
  margin: 10px;
`;

const NavElement = styled.a`
  display: block;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      Color(theme.primary)
        .alpha(0.3)
        .rgb()
        .string()};
  text-decoration: none;
  color: inherit;
`;

export default MobileNavigationHeader;
