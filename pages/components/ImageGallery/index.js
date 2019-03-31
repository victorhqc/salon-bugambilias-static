import React from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import DesktopImageGallery from './DesktopImageGallery';
import MobileImageGallery from './MobileImageGallery';

const ImageGallery = props => {
  const { isMobileDevice } = props;

  if (isMobileDevice) {
    return <MobileImageGallery {...props} />;
  }

  return <DesktopImageGallery {...props} />;
};

ImageGallery.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(ImageGallery);
