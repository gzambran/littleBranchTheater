import React from 'react';

export default function OrganizationStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterGroup',
    name: 'Little Branch Theater',
    url: 'https://littlebranchtheater.org',
    logo: 'https://littlebranchtheater.org/images/logo.jpg', // Update with actual logo path
    location: {
      '@type': 'Place',
      name: 'Visual Arts Collective',
      address: 'Garden City, Idaho'
    },
    description: 'A new theater company bringing fresh perspectives to the stage.',
    sameAs: [
      // Add social media profiles if available
      // 'https://facebook.com/littlebranchtheater',
      // 'https://instagram.com/littlebranchtheater'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}