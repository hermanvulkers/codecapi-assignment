import { parseLocationSlug } from './parse-location-slug';

describe('parseLocationSlug', () => {
  it('should parse a valid slug', () => {
    const slug = 'Amsterdam_5237_489';
    const result = parseLocationSlug(slug);

    expect(result).toEqual({
      name: 'Amsterdam',
      lat: 52.37,
      lon: 4.89,
    });
  });

  it('should handle encoded city names', () => {
    const slug = 'S%C3%A3o%20Paulo_-2355_-4663';
    const result = parseLocationSlug(slug);

    expect(result).toEqual({
      name: 'São Paulo',
      lat: -23.55,
      lon: -46.63,
    });
  });

  it('should handle zero coordinates', () => {
    const slug = 'Null%20Island_0_0';
    const result = parseLocationSlug(slug);

    expect(result).toEqual({
      name: 'Null Island',
      lat: 0,
      lon: 0,
    });
  });

  it('should handle negative coordinates', () => {
    const slug = 'Sydney_-3387_15121';
    const result = parseLocationSlug(slug);

    expect(result).toEqual({
      name: 'Sydney',
      lat: -33.87,
      lon: 151.21,
    });
  });

  it('should return null for invalid slug format', () => {
    const invalidSlugs = [
      'Amsterdam',
      'Amsterdam_5237',
      'Amsterdam_5237_489_extra',
      '',
    ];

    invalidSlugs.forEach((slug) => {
      expect(parseLocationSlug(slug)).toBeNull();
    });
  });

  it('should return null for non-numeric coordinates', () => {
    const slug = 'Amsterdam_abc_def';
    const result = parseLocationSlug(slug);

    expect(result).toBeNull();
  });

  it('should handle city names with special characters when properly encoded', () => {
    const slug = 'New%20York_4071_-7401';
    const result = parseLocationSlug(slug);

    expect(result).toEqual({
      name: 'New York',
      lat: 40.71,
      lon: -74.01,
    });
  });
});
