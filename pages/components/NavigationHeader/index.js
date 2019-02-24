import React, { Fragment } from 'react';
import { Breakpoint } from '@smooth-ui/core-sc';

import DesktopNavigationHeader from './DesktopNavigationHeader';
import MobileNavigationHeader from './MobileNavigationHeader';

const NavigationHeader = () => (
  <Fragment>
    <Breakpoint down="sm">
      <MobileNavigationHeader />
    </Breakpoint>
    <Breakpoint up="sm">
      <DesktopNavigationHeader />
    </Breakpoint>
  </Fragment>
);

export default NavigationHeader;
