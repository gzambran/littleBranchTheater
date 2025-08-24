import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productions | Little Branch Theater',
  description: 'Explore Little Branch Theater\'s past and upcoming productions. From Honey Brown Eyes to our upcoming Spring 2026 show, discover stories that uplift diverse voices.',
  openGraph: {
    title: 'Productions | Little Branch Theater',
    description: 'Explore Little Branch Theater\'s past and upcoming productions. From Honey Brown Eyes to our upcoming Spring 2026 show, discover stories that uplift diverse voices.',
    url: 'https://littlebranch.theater/productions',
    siteName: 'Little Branch Theater',
    images: [
      {
        url: 'https://littlebranch.theater/images/productions-og.png',
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
    description: 'Explore Little Branch Theater\'s past and upcoming productions. Discover stories that uplift diverse voices and inspire community connection.',
    images: ['https://littlebranch.theater/images/productions-og.png'],
  },
  keywords: [
    'Little Branch Theater productions',
    'theater shows',
    'Honey Brown Eyes',
    'upcoming productions',
    'community theater',
    'diverse voices',
    'theater company',
    'live performance',
    'theatrical productions'
  ],
};