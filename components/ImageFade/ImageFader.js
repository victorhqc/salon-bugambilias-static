import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { visibleImagesReducer, getDefaultState, nextImage } from './reducer';
import { Img, Wrapper } from './styled';

const ImageFader = ({ images, isMobileDevice }) => {
  const [state, dispatch] = useReducer(visibleImagesReducer, getDefaultState(images));
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
      <Img
        data-is-mobile={isMobileDevice}
        data-testid="ssr-placeholder"
        {...state.visibleImages[0]}
      />
      {transitions.map(({ item, props, key }) => (
        <Img
          data-is-mobile={isMobileDevice}
          src={item.src}
          alt={item.alt}
          key={key}
          style={{ ...props }}
        />
      ))}
      <Img
        data-is-mobile={isMobileDevice}
        data-testid="next-image"
        invisible="true"
        {...state.visibleImages[1]}
      />
    </Wrapper>
  );
};

ImageFader.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  isMobileDevice: PropTypes.bool,
};

export default ImageFader;
