import React, { useReducer, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { withUserAgent } from '../UserAgent';
import isInScreen from '../isInScreen';
import { imageGalleryReducer, getDefaultState, nextImage, previousImage } from './reducer';
import { Wrapper, BackwardWrapper, BackwardIcon, ForwardWrapper, ForwardIcon, Img } from './styled';
import { event } from '../../utils';

const ImageGallery = ({ images, height, isMobileDevice, nextDelay, isInScreen }) => {
  const [state, dispatch] = useReducer(imageGalleryReducer, getDefaultState(images));
  const [mouseStatus, setMouseStatus] = useState('none');
  const onForward = useCallback(() => {
    dispatch(nextImage());
    event({
      action: 'gallery_click',
      category: 'gallery',
      label: 'Next Image',
    });
  }, []);
  const onPrevious = useCallback(() => {
    dispatch(previousImage());
    event({
      action: 'gallery_click',
      category: 'gallery',
      label: 'Previous Image',
    });
  }, []);

  useEffect(() => {
    if (!process.browser || isMobileDevice) return;

    let automaticNextImage = setInterval(() => {
      setTimeout(() => dispatch(nextImage()), nextDelay || 0);
    }, 6000);

    // Disable automatic next image when mouse is over the gallery or is not in the screen.
    if (mouseStatus === 'entered' || !isInScreen) {
      clearInterval(automaticNextImage);
    }

    // Disable next image when out of blur of `window`. As it triggers a lot of animations at once.
    const onBlur = () => {
      clearInterval(automaticNextImage);
    };

    // Small hack just to reenable the automatic next image.
    const onFocus = () => {
      setMouseStatus(`Focus-${Math.random()}`);
    };

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);

      clearInterval(automaticNextImage);
    };
  }, [mouseStatus, isInScreen]);

  const nextImageTransitions = useTransition(state.images[0], item => item.src, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  });
  const previousImageTransitions = useTransition(state.images[0], item => item.src, {
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(50%, 0, 0)' },
  });

  return (
    <Wrapper
      data-testid="desktop-gallery-wrapper"
      height={height}
      onMouseEnter={() => setMouseStatus('entered')}
      onMouseLeave={() => setMouseStatus('left')}
    >
      <BackwardWrapper onClick={onPrevious} title="Imagen anterior">
        <BackwardIcon />
      </BackwardWrapper>
      <ForwardWrapper onClick={onForward} title="Siguiente imagen">
        <ForwardIcon />
      </ForwardWrapper>
      {state.direction === 'none' && <Img {...state.images[0]} />}
      {state.direction === 'next' &&
        nextImageTransitions.map(({ item, key, props }) => (
          <Img style={props} key={key} {...item} />
        ))}
      {state.direction === 'previous' &&
        previousImageTransitions.map(({ item, key, props }) => (
          <Img style={props} key={key} {...item} />
        ))}
      {/* Prefetches the next image */}
      <Img invisible="true" {...state.images[1]} data-testid="prefetched" />
    </Wrapper>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  height: PropTypes.string,
  isMobileDevice: PropTypes.bool,
  isInScreen: PropTypes.bool,
  nextDelay: PropTypes.number,
};

export default withUserAgent(isInScreen(ImageGallery));
