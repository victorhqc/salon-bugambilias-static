import React from 'react';
import PropTypes from 'prop-types';
import { styled, th } from '@smooth-ui/core-sc';

const NavigationHeader = ({ children }) => (
  <Wrapper>
    {children}
    <Nav>
      <NavElement href="/servicios">Servicios</NavElement>
      <Separator />
      <NavElement href="/acerca-de">Salón bugambilias</NavElement>
      <Separator />
      <NavElement href="/contacto">Contáctanos</NavElement>
    </Nav>
  </Wrapper>
);

NavigationHeader.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0px;
  right: 100px;
`;

// const List = styled.ul`
//   position: fixed;
//   display: flex;
//   list-style: none;
//   text-decoration: none;
//   top: 0;
//   right: 100px;
//   margin: 0;
//   padding: 0;
// `;

const NavElement = styled.a`
  flex: 0 0 auto;
  text-decoration: none;
  line-height: 2.78em;
  cursor: pointer;
  color: ${th('primary')};
`;

const Separator = styled.span`
  flex: 0 0 auto;
  background-color: ${th('primary')};
  opacity: 0.35;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 15px;
`;

export default NavigationHeader;
