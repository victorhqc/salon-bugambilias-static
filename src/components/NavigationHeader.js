import React, { Fragment, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import logo from '../../public/logo.png';

const NavigationHeader = () => {
  const [springProps, setSpring] = useSpring(() => ({ scrollPosition: 0, config: config.stiff }));

  // Equivalent to componentDidMount
  useEffect(() => {
    const eventListener = scrollEventListener({ setSpring });

    window.addEventListener('scroll', eventListener);
    // Return a function equals componentWillUnmount
    return () => window.removeEventListener('scroll', eventListener);
  }, []); // [] means we don't want it to get called in every re-render.

  return (
    <Fragment>
      <animated.img alt="Salón bugambilias" src={logo} style={calculateImgStyle(springProps)} />
      <header>
        <h1>Salón bugambilias</h1>
      </header>
    </Fragment>
  );
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

function calculateImgStyle({ scrollPosition }) {
  const dynamicPosition = scrollPosition.interpolate(val => {
    if (val < 100) {
      return 'absolute';
    }

    return 'fixed';
  });

  const dynamicTransform = scrollPosition.interpolate(val => {
    if (val < 100) {
      return 'translate3d(0, 100px, 0) scale(1)';
    }

    // 100 is for the offset.
    const scale = (100 - val) / 100 + 1;

    if (scale <= 0.4) {
      return 'translate3d(-36px, -48px, 0) scale(0.4)';
    }

    const counterScale = 1 - scale;

    const x = -60 * counterScale;
    const y = -80 * counterScale;

    return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  });

  return {
    position: dynamicPosition,
    transform: dynamicTransform,
  };
}

export default NavigationHeader;
