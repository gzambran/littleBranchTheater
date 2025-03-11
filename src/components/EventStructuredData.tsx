import React from 'react';

interface EventStructuredDataProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  ticketUrl: string;
  image?: string;
  doorTime?: string;
  performer?: string;
}

export default function EventStructuredData({
  name,
  description,
  startDate,
  endDate,
  location,
  ticketUrl,
  image,
  doorTime,
  performer
}: EventStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    doorTime,
    location: {
      '@type': 'Place',
      name: location.name,
      address: location.address
    },
    offers: {
      '@type': 'Offer',
      url: ticketUrl,
      availability: 'https://schema.org/InStock'
    },
    performer: performer ? {
      '@type': 'PerformingGroup',
      name: performer
    } : undefined,
    image
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}