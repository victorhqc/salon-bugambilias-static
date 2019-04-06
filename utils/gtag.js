export const GA_TRACKING_ID = 'UA-77111108-3';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({
      config: {
        page_path: url,
      },
    });

    return;
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({
      event: {
        event_category: category,
        event_label: label,
        value: value,
      },
    });

    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
