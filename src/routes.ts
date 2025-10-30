export const ROUTES = {
    home: '/',
    about: '/about',
    services: '/services',
    products: '/products',
    clients: '/clients',
    companyProfile: '/company-profile',
    contact: '/contact'
} as const;

export type RouteKey = keyof typeof ROUTES;

