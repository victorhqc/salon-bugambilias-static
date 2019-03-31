import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import ImageFader from './ImageFader';
import { DESKTOP_IMAGES, MOBILE_IMAGES } from './utils';

class ImageFade extends Component {
  render() {
    if (this.props.isMobileDevice) {
      return <ImageFader {...this.props} images={MOBILE_IMAGES} mobile />;
    }

    return <ImageFader {...this.props} images={DESKTOP_IMAGES} />;
  }
}

ImageFade.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(ImageFade);
