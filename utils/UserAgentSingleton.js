import isEmpty from 'lodash/isEmpty';

export default class UserAgentSingleton {
  constructor(userAgent = {}) {
    this.set(userAgent);
  }

  set(userAgent) {
    if (process.browser && !isEmpty(userAgent)) {
      localStorage.setItem('user-agent', JSON.stringify(userAgent));
    }
    this.userAgent = userAgent;
  }

  get() {
    if (process.browser && !this.userAgent) {
      const userAgent = JSON.parse(localStorage.getItem('user-agent') || '{}');
      this.set(userAgent);
    }

    return this.userAgent;
  }

  isMobileDevice() {
    const userAgent = this.get();

    if (
      userAgent.device &&
      (userAgent.device.type === 'mobile' || userAgent.device.type === 'wearable')
    ) {
      return true;
    }

    return false;
  }
}
