import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

const baseUrl = 'https://www.rigzonellc.com';

const staticRoutes: Array<{
    path: string;
    priority?: number;
    changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency'];
}> = [
        { path: '/', priority: 1, changeFrequency: 'monthly' },
        { path: '/companyprofile', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/products', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    ];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return staticRoutes.map(({ path, priority, changeFrequency }) => ({
        url: `${baseUrl}${path === '/' ? '' : `${path}/`}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}


