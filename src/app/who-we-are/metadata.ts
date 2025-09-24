import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Are | Little Branch Theater',
  description: 'Our journey, values, and vision – discover what drives Little Branch forward',
  openGraph: {
    title: 'Who We Are | Little Branch Theater',
    description: 'Our journey, values, and vision – discover what drives Little Branch forward',
    url: 'https://www.littlebranchtheater.org/who-we-are', // Fixed domain
    siteName: 'Little Branch Theater',
    images: [
      {
        url: 'https://www.littlebranchtheater.org/images/who-we-are-og.png',
        width: 1200,
        height: 630,
        alt: 'Who We Are - Little Branch Theater',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are | Little Branch Theater',
    description: 'Our journey, values, and vision – discover what drives Little Branch forward',
    images: ['https://www.littlebranchtheater.org/images/who-we-are-og.png'],
  },
  keywords: [
    'Little Branch Theater',
    'about us',
    'theater company',
    'Amela Karadža',
    'Jovani Zambrano',
    'Boise theater',
    'community theater',
    'diverse voices',
    'theater mission',
    'founders'
  ],
  alternates: {
    canonical: 'https://www.littlebranchtheater.org/who-we-are',
  },
};