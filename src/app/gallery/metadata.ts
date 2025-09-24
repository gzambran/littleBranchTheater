import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Little Branch Theater',
  description: 'Explore photos from Little Branch Theater productions, including behind-the-scenes moments and performance highlights from our shows.',
  openGraph: {
    title: 'Gallery | Little Branch Theater',
    description: 'Explore photos from Little Branch Theater productions, including behind-the-scenes moments and performance highlights from our shows.',
    url: 'https://www.littlebranchtheater.org/gallery',
    siteName: 'Little Branch Theater',
    images: [
      {
        url: 'https://www.littlebranchtheater.org/images/gallery-og.png',
        width: 1200,
        height: 630,
        alt: 'Little Branch Theater Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Little Branch Theater',
    description: 'Explore photos from Little Branch Theater productions and behind-the-scenes moments.',
    images: ['https://www.littlebranchtheater.org/images/gallery-og.png'],
  },
  keywords: [
    'Little Branch Theater gallery',
    'theater photos',
    'production photos',
    'behind the scenes',
    'Honey Brown Eyes photos',
    'theater company gallery',
    'performance photos',
    'Boise theater',
    'community theater'
  ],
  alternates: {
    canonical: 'https://www.littlebranchtheater.org/gallery',
  },
  // Removed the 'noindex, nofollow' directive
}