import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { animated, useSpring, config } from 'react-spring';
import { th, styled } from '@smooth-ui/core-sc';
import { withTheme } from 'styled-components';
import theme from '../../theme';

const primaryColor = th('primary');

const DesktopNavigationHeader = ({ color, ...props }) => {
  const [springProps, setSpring] = useSpring(() => ({ scrollPosition: 0, config: config.stiff }));
  const menuColor = color || primaryColor(props);

  // Equivalent to componentDidMount
  useEffect(() => {
    const eventListener = scrollEventListener({ setSpring });

    window.addEventListener('scroll', eventListener);
    // Return a function equals componentWillUnmount
    return () => window.removeEventListener('scroll', eventListener);
  }, []); // [] means we don't want it to get called in every re-render.

  return (
    <Header>
      <Nav style={calculateNavStyle(springProps, menuColor)}>
        <Link href="/" passHref>
          <a>
            <animated.img
              alt="Salón bugambilias"
              src="/static/logo.png"
              style={calculateImgStyle(springProps)}
            />
          </a>
        </Link>
        <Link href="/servicios" passHref>
          <NavElement>Servicios</NavElement>
        </Link>
        <Separator />
        <Link href="/acerca-de" passHref>
          <NavElement>Salón bugambilias</NavElement>
        </Link>
        <Separator />
        <Link href="/contacto" passHref>
          <NavElement>Contáctanos</NavElement>
        </Link>
      </Nav>
    </Header>
  );
};

DesktopNavigationHeader.propTypes = {
  color: PropTypes.string,
};

function scrollEventListener({ setSpring }) {
  let isTicking = false;
  let scrollPosition = 0;

  return () => {
    scrollPosition = window.scrollY;

    if (!isTicking) {
      window.requestAnimationFrame(() => {
        setSpring({ scrollPosition });
        isTicking = false;
      });

      isTicking = true;
    }
  };
}

const TOP_OFFSET = 60;

function calculateNavStyle({ scrollPosition }, defaultColor) {
  const dynamicBackground = scrollPosition.interpolate(val => {
    if (val < TOP_OFFSET) {
      return 'transparent';
    }

    return theme.primary;
  });

  const dynamicColor = scrollPosition.interpolate(val => {
    if (val < TOP_OFFSET) {
      return defaultColor;
    }

    return '#fff';
  });

  return {
    backgroundColor: dynamicBackground,
    color: dynamicColor,
  };
}

function calculateImgStyle({ scrollPosition }) {
  const dynamicTransform = scrollPosition.interpolate(val => {
    const imgOffset = 0;

    if (val < TOP_OFFSET) {
      return `translate3d(0, ${imgOffset}px, 0) scale(1)`;
    }

    const scale = (TOP_OFFSET - val) / 100 + 1;

    if (scale <= 0.35) {
      // -60 * (1 - 0.35) = 39
      // -110 * (1 - 0.35) = 71.5
      return 'translate3d(-39px, -71.5px, 0) scale(0.35)';
    }

    const counterScale = 1 - scale;

    const x = -60 * counterScale;
    const y = -110 * counterScale + imgOffset;

    return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  });

  return {
    left: 0,
    position: 'fixed',
    transform: dynamicTransform,
  };
}

const Header = styled.header`
  /* margin-top: 3.5rem; */
`;

const Nav = styled(animated.nav)`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0px;
  width: 100%;
  padding-right: 100px;
  z-index: 10;

  transition-duration: 200ms;
  transition-property: background-color color;
`;

const NavElement = styled.a`
  flex: 0 0 auto;
  text-decoration: none;
  line-height: 3.5rem;
  cursor: pointer;
  color: inherit;
`;

const Separator = styled.span`
  flex: 0 0 auto;
  background-color: currentColor;
  color: inherit;
  opacity: 0.35;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 15px;
`;

export default withTheme(DesktopNavigationHeader);
