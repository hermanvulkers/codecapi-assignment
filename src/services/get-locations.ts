import { GeocodingResponse, GeocodingResult } from '@/types/geocoding';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export async function getLocations(query: string): Promise<GeocodingResult[]> {
  if (!query || query.length < 2) {
    return [];
  }

  const params = new URLSearchParams({
    name: query,
    count: '10',
    language: 'nl',
  });

  try {
    const response = await fetch(`${GEOCODING_API_URL}?${params}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }

    const data: GeocodingResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return [];
  }
}