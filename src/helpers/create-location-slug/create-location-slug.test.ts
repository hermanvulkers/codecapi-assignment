import { GeocodingResult } from '@/types/geocoding';
import { createLocationSlug } from './create-location-slug';

describe('createLocationSlug', () => {
  it('should create a slug from location data', () => {
    const location: GeocodingResult = {
      id: 1,
      name: 'Amsterdam',
      latitude: 52.374,
      longitude: 4.8897,
      country_code: 'NL',
      country: 'Netherlands',
      admin1: 'North Holland',
    };

    const result = createLocationSlug(location);
    expect(result).toBe('Amsterdam_5237_489');
  });

  it('should handle special characters in city names', () => {
    const location: GeocodingResult = {
      id: 2,
      name: 'São Paulo',
      latitude: -23.5505,
      longitude: -46.6333,
      country_code: 'BR',
      country: 'Brazil',
      admin1: 'São Paulo',
    };

    const result = createLocationSlug(location);
    expect(result).toBe('S%C3%A3o%20Paulo_-2355_-4663');
  });

  it('should handle missing country code', () => {
    const location: GeocodingResult = {
      id: 3,
      name: 'Unknown City',
      latitude: 0,
      longitude: 0,
      country: 'Unknown',
      admin1: undefined,
    };

    const result = createLocationSlug(location);
    expect(result).toBe('Unknown%20City_0_0');
  });

  it('should round coordinates correctly', () => {
    const location: GeocodingResult = {
      id: 4,
      name: 'London',
      latitude: 51.5074,
      longitude: -0.1278,
      country_code: 'GB',
      country: 'United Kingdom',
      admin1: 'England',
    };

    const result = createLocationSlug(location);
    expect(result).toBe('London_5151_-13');
  });

  it('should handle negative coordinates', () => {
    const location: GeocodingResult = {
      id: 5,
      name: 'Sydney',
      latitude: -33.8688,
      longitude: 151.2093,
      country_code: 'AU',
      country: 'Australia',
      admin1: 'New South Wales',
    };

    const result = createLocationSlug(location);
    expect(result).toBe('Sydney_-3387_15121');
  });
});
