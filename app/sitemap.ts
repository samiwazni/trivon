import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.trivon.vip'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    // add each real page below, e.g.:
    // { url: `${base}/about`, lastModified: new Date() },
    // { url: `${base}/contact`, lastModified: new Date() },
  ]
}
