import React from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import { isMobileDevice } from '../../../src/utils';

import DesktopNavigationHeader from './DesktopNavigationHeader';
import MobileNavigationHeader from './MobileNavigationHeader';

const NavigationHeader = props => {
  if (isMobileDevice(props.userAgent)) {
    return <MobileNavigationHeader {...props} />;
  }

  return <DesktopNavigationHeader {...props} />;
};

NavigationHeader.propTypes = {
  userAgent: PropTypes.shape({}),
};

export default withUserAgent(NavigationHeader);
