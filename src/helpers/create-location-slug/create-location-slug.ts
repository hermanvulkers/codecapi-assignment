import { GeocodingResult } from '@/types/geocoding';

export function createLocationSlug(location: GeocodingResult): string {
  const encodedName = encodeURIComponent(location.name);
  const lat = Math.round(location.latitude * 100);
  const lon = Math.round(location.longitude * 100);

  return `${encodedName}_${lat}_${lon}`;
}
