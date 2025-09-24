import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productions | Little Branch Theater',
  description: 'Explore Little Branch Theater\'s productions. From our debut with Honey Brown Eyes to exciting new work coming in Spring 2026, discover stories that uplift diverse voices.',
  openGraph: {
    title: 'Productions | Little Branch Theater',
    description: 'Explore Little Branch Theater\'s productions. From our debut with Honey Brown Eyes to exciting new work coming in Spring 2026, discover stories that uplift diverse voices.',
    url: 'https://www.littlebranchtheater.org/productions',
    siteName: 'Little Branch Theater',
    images: [
      {
        url: 'https://www.littlebranchtheater.org/images/productions-og.png',
        width: 1200,
        height: 630,
        alt: 'Little Branch Theater Productions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productions | Little Branch Theater',
    description: 'Explore Little Branch Theater\'s productions. From our debut with Honey Brown Eyes to exciting new work coming in Spring 2026.',
    images: ['https://www.littlebranchtheater.org/images/productions-og.png'],
  },
  keywords: [
    'Little Branch Theater productions',
    'theater shows',
    'Honey Brown Eyes',
    'upcoming productions',
    'Spring 2026',
    'community theater',
    'diverse voices',
    'theater company',
    'live performance',
    'theatrical productions'
  ],
  // Add explicit canonical URL
  alternates: {
    canonical: 'https://www.littlebranchtheater.org/productions',
  },
};