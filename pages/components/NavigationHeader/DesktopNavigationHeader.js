import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { animated, useSpring, config } from 'react-spring';
import { th, styled } from '@smooth-ui/core-sc';
import { withTheme } from 'styled-components';
import theme from '../../theme';
import { PAGES } from './utils';

const primaryColor = th('primary');

const getInitialScrollPosition = () => {
  if (process.browser) {
    return window.scrollY;
  }

  return 0;
};

const DesktopNavigationHeader = ({ color, ...props }) => {
  const [springProps, setSpring] = useSpring(() => ({
    scrollPosition: getInitialScrollPosition(),
    config: config.stiff,
  }));
  const menuColor = color || primaryColor(props);

  // Equivalent to componentDidMount
  useEffect(() => {
    const eventListener = scrollEventListener({ setSpring });

    window.addEventListener('scroll', eventListener);
    // Return a function equals componentWillUnmount
    return () => window.removeEventListener('scroll', eventListener);
  }, []); // [] means we don't want it to get called in every re-render.

  return (
    <header>
      <Nav style={calculateNavStyle(springProps, menuColor)}>
        <Link href="/" passHref>
          <a>
            <Img
              alt="Salón bugambilias"
              src={require('../../../images/logo.png')}
              style={calculateImgStyle(springProps)}
            />
          </a>
        </Link>
        {PAGES.map((page, index) => (
          <Fragment key={page.href}>
            <Link href={page.href} passHref>
              <NavElement>{page.title}</NavElement>
            </Link>
            {index < PAGES.length - 1 ? <Separator /> : null}
          </Fragment>
        ))}
      </Nav>
    </header>
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

  const dynamicBoxShadow = scrollPosition.interpolate(val => {
    if (val < TOP_OFFSET) {
      return 'none';
    }

    return '0 1px 3px rgba(0, 0, 0, 0.1)';
  });

  return {
    backgroundColor: dynamicBackground,
    color: dynamicColor,
    boxShadow: dynamicBoxShadow,
  };
}

function calculateImgStyle({ scrollPosition }) {
  const imgOffset = 0;
  const dynamicTransform = scrollPosition.interpolate(val => {
    if (val < TOP_OFFSET) {
      return `translate3d(0px, ${imgOffset}px, 0px) scale(1)`;
    }

    const scale = (TOP_OFFSET - val) / 100 + 1;

    if (scale <= 0.35) {
      // -92 * (1 - 0.35) = 59.8
      // -110 * (1 - 0.35) = 71.5
      return 'translate3d(-59.8px, -71.5px, 0px) scale(0.35)';
    }

    const counterScale = 1 - scale;

    const x = -92 * counterScale;
    const y = -110 * counterScale + imgOffset;

    return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  });

  return {
    transform: dynamicTransform,
  };
}

const Img = styled(animated.img)`
  position: fixed;
  left: 35px;
`;

const Nav = styled(animated.nav)`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0px;
  width: 100%;
  padding-right: 50px;
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
