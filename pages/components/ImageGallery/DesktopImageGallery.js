import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { imageGalleryReducer, getDefaultState, nextImage, previousImage } from './reducer';
import { Wrapper, BackwardWrapper, BackwardIcon, ForwardWrapper, ForwardIcon, Img } from './styled';

const DesktopImageGallery = ({ images, height }) => {
  const [state, dispatch] = useReducer(imageGalleryReducer, getDefaultState(images));

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
    <Wrapper data-testid="desktop-gallery-wrapper" height={height}>
      <BackwardWrapper onClick={() => dispatch(previousImage())} title="Imagen anterior">
        <BackwardIcon />
      </BackwardWrapper>
      <ForwardWrapper onClick={() => dispatch(nextImage())} title="Siguiente imagen">
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
    </Wrapper>
  );
};

DesktopImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  height: PropTypes.number,
};

export default DesktopImageGallery;
