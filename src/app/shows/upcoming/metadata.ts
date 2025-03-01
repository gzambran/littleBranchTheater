import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Honey Brown Eyes | Little Branch Theater',
  description: 'Details about our upcoming production Honey Brown Eyes by Stefanie Zadravec, presented by Little Branch Theater in Garden City, Idaho.',
  openGraph: {
    title: 'Honey Brown Eyes | Little Branch Theater',
    description: 'A powerful new production exploring themes of identity, connection, and the horror of war.',
    url: 'https://littlebranch.theater/shows/upcoming',
    siteName: 'Little Branch Theater',
    locale: 'en_US',
    type: 'website',
  },
  // Adding structured data with JSON-LD as a string (Next.js expects a string or array of strings)
  alternates: {
    types: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TheaterEvent',
        'name': 'Honey Brown Eyes',
        'description': 'Bosnia 1992: In two kitchens, two soldiers recover a little of what they have lost during the war.',
        'performer': {
          '@type': 'TheaterGroup',
          'name': 'Little Branch Theater'
        },
        'location': {
          '@type': 'Place',
          'name': 'Visual Arts Collective',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Garden City',
            'addressRegion': 'Idaho',
            'addressCountry': 'US'
          }
        },
        'startDate': '2025-05-22T20:00:00-06:00',
        'endDate': '2025-06-01T16:00:00-06:00',
        'offers': {
          '@type': 'Offer',
          'url': 'https://alleyreptheater.thundertix.com/events/236398',
          'availability': 'https://schema.org/InStock'
        }
      })
    }
  }
}