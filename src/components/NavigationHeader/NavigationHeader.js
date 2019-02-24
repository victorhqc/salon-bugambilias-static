import React, { useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import logo from '../../../public/logo.png';
import NavigationMenu from './NavigationMenu';

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
    <NavigationMenu>
      <animated.img alt="Salón bugambilias" src={logo} style={calculateImgStyle(springProps)} />
    </NavigationMenu>
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
  const dynamicTransform = scrollPosition.interpolate(val => {
    const imgOffset = -40;

    if (val < 100) {
      return `translate3d(0, ${imgOffset}px, 0) scale(1)`;
    }

    // 100 is for the offset.
    const scale = (100 - val) / 100 + 1;

    if (scale <= 0.4) {
      return 'translate3d(-36px, -88px, 0) scale(0.4)';
    }

    const counterScale = 1 - scale;

    const x = -60 * counterScale;
    const y = -80 * counterScale + imgOffset;

    return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  });

  return {
    position: 'fixed',
    transform: dynamicTransform,
  };
}

export default NavigationHeader;
