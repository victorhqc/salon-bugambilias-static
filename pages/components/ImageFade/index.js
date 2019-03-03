import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import DesktopImageFader from './DesktopImageFader';
import MobileImageFader from './MobileImageFader';
import { isMobileDevice } from '../../../src/utils';

class ImageFade extends Component {
  render() {
    if (isMobileDevice(this.props.userAgent)) {
      return <MobileImageFader {...this.props} />;
    }

    return <DesktopImageFader {...this.props} />;
  }
}

ImageFade.propTypes = {
  userAgent: PropTypes.shape({}),
};

export default withUserAgent(ImageFade);
