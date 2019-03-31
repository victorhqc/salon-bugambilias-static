import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import DesktopImageFader from './DesktopImageFader';
import MobileImageFader from './MobileImageFader';

class ImageFade extends Component {
  render() {
    if (this.props.isMobileDevice) {
      return <MobileImageFader {...this.props} />;
    }

    return <DesktopImageFader {...this.props} />;
  }
}

ImageFade.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(ImageFade);
