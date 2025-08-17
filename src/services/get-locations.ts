import { API_CONFIG } from '@/config/api';
import { GeocodingResponse, GeocodingResult } from '@/types/geocoding';

export async function getLocations(query: string): Promise<GeocodingResult[]> {
  if (!query || query.length < 2) {
    return [];
  }

  const params = new URLSearchParams({
    name: query,
    count: API_CONFIG.geocoding.resultsLimit.toString(),
    language: 'en',
  });

  const res = await fetch(`${API_CONFIG.geocoding.url}?${params}`, {
    next: { revalidate: API_CONFIG.geocoding.cacheDuration },
  });

  if (!res.ok) {
    throw new Error(`Geocoding API error: ${res.status}`);
  }

  const data = (await res.json()) as GeocodingResponse;
  return data.results ?? [];
}
