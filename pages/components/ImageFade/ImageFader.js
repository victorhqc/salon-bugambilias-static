import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { visibleImagesReducer, getDefaultState, nextImage } from './reducer';
import { Img, Wrapper } from './styled';

const ImageFader = ({ images, mobile }) => {
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
      <Img mobile={mobile} data-testid="ssr-placeholder" {...state.visibleImages[0]} />
      {transitions.map(({ item, props, key }) => (
        <Img mobile={mobile} src={item.src} alt={item.alt} key={key} style={{ ...props }} />
      ))}
      <Img mobile={mobile} data-testid="next-image" invisible {...state.visibleImages[1]} />
    </Wrapper>
  );
};

ImageFader.defaultProps = {
  mobile: false,
};

ImageFader.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  mobile: PropTypes.bool,
};

export default ImageFader;
