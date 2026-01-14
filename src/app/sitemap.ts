import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.littlebranchtheater.org'
  const lastModified = new Date()

  // Define all site routes with appropriate priorities and change frequencies
  const routes: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority: number
  }> = [
    // Homepage - Highest priority, updated weekly with current shows/news
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Current production - Very high priority (main business driver)
    {
      url: `${baseUrl}/productions/honey-brown-eyes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    
    // Main navigation pages - High priority
    {
      url: `${baseUrl}/who-we-are`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productions`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-involved`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Upcoming production
    {
      url: `${baseUrl}/productions/sanctuary-city`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  return routes
}

/* 
SITEMAP NOTES:
=============

Included Routes:
- All main navigation pages from Header.tsx
- Current production (Honey Brown Eyes)
- Future productions page
- All discoverable public routes from App Router

Excluded Routes:
- /beyond-the-lobby - Has noindex/nofollow meta tags, accessed via QR code only
- Any dynamic routes not yet implemented
- Admin or internal pages

Priority Strategy:
- 1.0: Homepage (main entry point)
- 0.9: Current show (main business focus)
- 0.8: Main navigation pages (core content)
- 0.6: Secondary/future content

Change Frequency Strategy:
- weekly: Dynamic content (homepage, upcoming shows)
- monthly: Stable content (about, team, current productions)

SEO Considerations:
- Theater websites benefit from emphasizing current productions
- Gallery and ensemble pages help with local SEO
- Regular updates to show information improve search ranking
- Community engagement pages support local discovery

Future Maintenance:
- Add new show routes when productions are announced
- Update priorities if business focus shifts
- Consider seasonal adjustments for show schedules
- Monitor Google Search Console for additional route discovery
*/