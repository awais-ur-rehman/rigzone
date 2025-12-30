// Google Analytics utility functions for tracking events

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a page view
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-HNLLWQH5DW', {
      page_path: url,
    });
  }
};

/**
 * Track an event
 * @param action - The action being tracked (e.g., 'click', 'submit', 'download')
 * @param category - The category of the event (e.g., 'button', 'form', 'navigation')
 * @param label - Optional label for the event
 * @param value - Optional numeric value
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'click',
    category: 'button',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  });
};

/**
 * Track navigation/link clicks
 */
export const trackNavigation = (destination: string, source?: string) => {
  event({
    action: 'click',
    category: 'navigation',
    label: `${source || 'unknown'} -> ${destination}`,
  });
};

/**
 * Track page views for client-side navigation
 */
export const trackPageView = (path: string) => {
  pageview(path);
};

/**
 * Track product views
 * @param productId - The product ID
 * @param productName - The product name/title
 * @param action - The action (view, expand, click)
 */
export const trackProductView = (productId: number, productName: string, action: 'view' | 'expand' | 'click' = 'view') => {
  event({
    action: action === 'expand' ? 'expand' : action === 'click' ? 'click' : 'view',
    category: 'product',
    label: `${productName} (ID: ${productId})`,
  });
};

/**
 * Track service views
 * @param serviceId - The service ID
 * @param serviceName - The service name/title
 * @param action - The action (view, click)
 */
export const trackServiceView = (serviceId: number, serviceName: string, action: 'view' | 'click' = 'view') => {
  event({
    action: action === 'click' ? 'click' : 'view',
    category: 'service',
    label: `${serviceName} (ID: ${serviceId})`,
  });
};

/**
 * Track newsletter subscription
 */
export const trackNewsletterSubscribe = (email: string) => {
  event({
    action: 'subscribe',
    category: 'newsletter',
    label: email,
  });
};
