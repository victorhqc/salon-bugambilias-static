import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { visibleImagesReducer, getDefaultState, nextImage } from './reducer';
import { DESKTOP_IMAGES } from './utils';

const DesktopImageFader = () => {
  const [state, dispatch] = useReducer(visibleImagesReducer, getDefaultState(DESKTOP_IMAGES));
  const transitions = useTransition(state.visibleImages[0], item => item.src, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 2000,
    },
  });

  useEffect(() => {
    const interval = () => {
      dispatch(nextImage());
    };

    setInterval(interval, 6000);

    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper data-testid="image-fader">
      <Img data-testid="ssr-placeholder" {...state.visibleImages[0]} />
      {transitions.map(({ item, props, key }) => (
        <Img src={item.src} key={key} style={{ ...props }} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60vh;
  position: relative;
  display: block;
`;

const Img = styled(animated.img)`
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 60vh;
  z-index: 0;
  top: 0;
  left: 0;

  will-change: opacity;
`;

export default DesktopImageFader;
