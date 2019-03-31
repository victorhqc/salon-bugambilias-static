import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { visibleImagesReducer, getDefaultState } from './reducer';

const DesktopImageGallery = ({ images }) => {
  const [state, dispatch] = useReducer(visibleImagesReducer, getDefaultState(images));
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

  console.log({ nextImageTransitions, previousImageTransitions, dispatch, images });

  return <p>Desktop Image gallery</p>;
};

DesktopImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

export default DesktopImageGallery;
