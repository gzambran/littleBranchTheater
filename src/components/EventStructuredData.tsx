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
  price?: number;
  priceCurrency?: string;
  validFrom?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  organizer?: {
    name: string;
    url?: string;
  };
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
  performer,
  price = 30,
  priceCurrency = "USD",
  validFrom = "2025-01-01T00:00:00-06:00",
  eventStatus = "https://schema.org/EventScheduled",
  eventAttendanceMode = "https://schema.org/OfflineEventAttendanceMode",
  organizer = { name: "Little Branch Theater Company", url: "https://www.littlebranchtheater.org" }
}: EventStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    doorTime,
    eventStatus,
    eventAttendanceMode,
    location: {
      '@type': 'Place',
      name: location.name,
      address: location.address
    },
    offers: {
      '@type': 'Offer',
      url: ticketUrl,
      price,
      priceCurrency,
      validFrom,
      availability: 'https://schema.org/InStock'
    },
    performer: performer ? {
      '@type': 'PerformingGroup',
      name: performer
    } : undefined,
    organizer: {
      '@type': 'Organization',
      name: organizer.name,
      url: organizer.url
    },
    image
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}