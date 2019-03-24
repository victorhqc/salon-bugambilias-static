import React from 'react';
import PropTypes from 'prop-types';
import { withUserAgent } from '../UserAgent';
import { isMobileDevice } from '../../../src/utils';

import DesktopNavigationOffset from './DesktopNavigationOffset';
import MobileNavigationOffset from './MobileNavigationOffset';

const NavigationHeader = props => {
  if (isMobileDevice(props.userAgent)) {
    return <MobileNavigationOffset {...props} />;
  }

  return <DesktopNavigationOffset {...props} />;
};

NavigationHeader.propTypes = {
  userAgent: PropTypes.shape({}),
};

export default withUserAgent(NavigationHeader);
