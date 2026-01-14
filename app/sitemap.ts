import { MetadataRoute } from 'next';
import seoData from '@/lib/seo-pages-data.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dolarexpress-cl.vercel.app';

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Dynamic pages from SEO data
  const dynamicPages: MetadataRoute.Sitemap = seoData.map((page) => ({
    url: `${baseUrl}/convertir/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...homepage, ...dynamicPages];
}
