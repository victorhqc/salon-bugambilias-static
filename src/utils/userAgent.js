export const isMobileDevice = userAgent => {
  if (
    userAgent.device &&
    (userAgent.device.type === 'mobile' || userAgent.device.type === 'wearable')
  ) {
    return true;
  }

  return false;
};
