import React from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';

import DesktopNavigationOffset from './DesktopNavigationOffset';
import MobileNavigationOffset from './MobileNavigationOffset';

const NavigationHeader = props => {
  if (props.isMobileDevice) {
    return <MobileNavigationOffset {...props} />;
  }

  return <DesktopNavigationOffset {...props} />;
};

NavigationHeader.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(NavigationHeader);
