import React, { useEffect, useRef } from 'react';

const NavigationHeader = () => {
  const headerRef = useRef();
  useEffect(detectScrolling(headerRef));

  return (
    <header ref={headerRef}>
      <h1>Salón bugambilias</h1>
    </header>
  );
};

let isTicking = false;
let lastKnownScrollPosition = 0;

const detectScrolling = headerRef => () => {
  const element = headerRef.current;
  const height = element.clientHeight;

  const scrollEventListener = () => {
    lastKnownScrollPosition = window.scrollY;

    if (!isTicking) {
      window.requestAnimationFrame(() => {
        scrollElement({ element, lastKnownScrollPosition, height });
        isTicking = false;
      });

      isTicking = true;
    }
  };

  window.addEventListener('scroll', scrollEventListener);

  return () => {
    window.removeEventListener('scroll', scrollEventListener);
  };
};

const scrollElement = args => {
  console.log(args);
};

export default NavigationHeader;
