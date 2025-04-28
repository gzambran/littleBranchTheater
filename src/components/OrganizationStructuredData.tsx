import React from 'react';

export default function OrganizationStructuredData() {
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterGroup',
    name: 'Little Branch Theater Company',
    url: 'https://littlebranchtheater.org',
    logo: 'https://littlebranchtheater.org/images/logo.svg',
    location: {
      '@type': 'Place',
      name: 'Visual Arts Collective',
      address: 'Garden City, Idaho'
    },
    description: 'A new theater company bringing fresh perspectives to the stage.',
    sameAs: [
      'https://instagram.com/littlebranchtheater'
    ]
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Little Branch Theater',
    url: 'https://www.littlebranchtheater.org',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://www.littlebranchtheater.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </>
  );
}