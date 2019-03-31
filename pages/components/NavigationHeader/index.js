import React from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';

import DesktopNavigationHeader from './DesktopNavigationHeader';
import MobileNavigationHeader from './MobileNavigationHeader';

const NavigationHeader = props => {
  if (props.isMobileDevice) {
    return <MobileNavigationHeader {...props} />;
  }

  return <DesktopNavigationHeader {...props} />;
};

NavigationHeader.propTypes = {
  isMobileDevice: PropTypes.bool,
};

export default withUserAgent(NavigationHeader);
