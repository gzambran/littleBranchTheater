import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon | Little Branch Theater',
  description: 'Little Branch Theater is preparing for its next production, set to premiere in Spring 2026. Stay updated on auditions, show announcements, and ticket sales.',
  openGraph: {
    title: 'Coming Soon | Little Branch Theater',
    description: 'Little Branch Theater is preparing for its next production, set to premiere in Spring 2026. Stay updated on auditions, show announcements, and ticket sales.',
    url: 'https://littlebranch.theater/productions/coming-soon',
    siteName: 'Little Branch Theater',
    images: [
      {
        url: 'https://littlebranch.theater/images/comingsoon.png',
        width: 1200,
        height: 630,
        alt: 'Little Branch Theater - Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon | Little Branch Theater',
    description: 'Little Branch Theater is preparing for its next production, set to premiere in Spring 2026. Stay updated on auditions, show announcements, and ticket sales.',
    images: ['https://littlebranch.theater/images/comingsoon.png'],
  },
  keywords: [
    'Little Branch Theater',
    'upcoming production',
    'Spring 2026',
    'theater auditions',
    'Amela Karadža',
    'Jovani Zambrano',
    'community theater',
    'diverse voices',
    'theater newsletter'
  ],
};