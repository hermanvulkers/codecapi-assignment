import { GeocodingResult } from '@/types/geocoding';

export function createLocationSlug(location: GeocodingResult): string {
  const parts = [
    location.name.toLowerCase().replace(/\s+/g, '-'),
    location.country_code?.toLowerCase() || 'unknown',
    Math.round(location.latitude * 100),
    Math.round(location.longitude * 100),
  ];

  return parts.join('-');
}
