import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

// Check if we're using placeholder credentials
const isPlaceholder = projectId === 'placeholder'

// Create a fallback client to handle placeholder state
const realClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Export a wrapped client that handles the placeholder case
export const client = {
  fetch: async (query: string, params?: any): Promise<any> => {
    if (isPlaceholder) {
      console.log('Using placeholder Sanity Project ID - returning null to trigger fallback content')
      return null
    }
    
    try {
      return await realClient.fetch(query, params)
    } catch (error) {
      console.error('Error fetching from Sanity:', error)
      return null
    }
  }
}

// Set up image builder
const builder = imageUrlBuilder(realClient)

// Define a type that mimics the ImageUrlBuilder interface
interface PlaceholderImageBuilder {
  width: (width: number) => PlaceholderImageBuilder;
  height: (height: number) => PlaceholderImageBuilder;
  url: () => string;
  // Add other methods as needed
}

// Create a placeholder image builder
const placeholderImageBuilder: PlaceholderImageBuilder = {
  width: () => placeholderImageBuilder,
  height: () => placeholderImageBuilder,
  url: () => '/images/placeholder.jpg'
};

export function urlFor(source: SanityImageSource) {
  // If source is null or we're using placeholder, return a placeholder
  if (!source || isPlaceholder) {
    return placeholderImageBuilder;
  }
  
  return builder.image(source)
}