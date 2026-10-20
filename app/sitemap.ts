import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { indexableBlogPosts, indexableResearchPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const publicRoutes = [
    { path: '', changed: '2026-10-20' },
    { path: '/about', changed: '2026-10-20' },
    { path: '/services', changed: '2026-10-20' },
    { path: '/contact-us', changed: '2026-10-20' },
    { path: '/blog', changed: '2026-10-20' },
    { path: '/research', changed: '2026-10-20' },
    { path: '/privacy', changed: '2026-10-08' },
    { path: '/terms', changed: '2026-10-08' },
  ];
  return [
    ...publicRoutes.map(({ path, changed }) => ({ url: `${base}${path}`, lastModified: new Date(changed) })),
    ...site.services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date('2026-10-20') })),
    ...indexableBlogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.publishedAt) })),
    ...indexableResearchPosts.map((post) => ({ url: `${base}/research/${post.slug}`, lastModified: new Date(post.publishedAt) })),
  ];
}
