import { API_CONFIG } from '@/config/api';
import { CityWeatherData } from '@/types/weather';

const POPULAR_CITIES = [
  { city: 'Amsterdam', country: 'NL', lat: 52.37, lon: 4.89 },
  { city: 'London', country: 'UK', lat: 51.51, lon: -0.13 },
  { city: 'Paris', country: 'FR', lat: 48.86, lon: 2.35 },
  { city: 'Berlin', country: 'DE', lat: 52.52, lon: 13.4 },
  { city: 'Rome', country: 'IT', lat: 41.9, lon: 12.5 },
  { city: 'Madrid', country: 'ES', lat: 40.42, lon: -3.7 },
  { city: 'Lisbon', country: 'PT', lat: 38.72, lon: -9.14 },
  { city: 'Vienna', country: 'AT', lat: 48.21, lon: 16.37 },
  { city: 'Stockholm', country: 'SE', lat: 59.33, lon: 18.07 },
  { city: 'Copenhagen', country: 'DK', lat: 55.68, lon: 12.57 },
] as const;

export async function getPopularCitiesWithWeather(): Promise<
  CityWeatherData[]
> {
  const lats = POPULAR_CITIES.map((city) => city.lat).join(',');
  const lons = POPULAR_CITIES.map((city) => city.lon).join(',');

  const queryString = new URLSearchParams({
    latitude: lats,
    longitude: lons,
    current: 'temperature_2m,weather_code,wind_speed_10m',
    timezone: 'Europe/Amsterdam',
  }).toString();

  const res = await fetch(`${API_CONFIG.weather.url}?${queryString}`, {
    next: { revalidate: API_CONFIG.weather.cacheDuration },
  });

  if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
  const data = await res.json();

  if (!Array.isArray(data)) {
    console.error('Unexpected API response format');
    return [];
  }

  return POPULAR_CITIES.map((capital, i) => {
    const locationData = data[i];
    if (!locationData || !locationData.current) {
      return {
        city: capital.city,
        country: capital.country,
        temperature: 0,
        weatherCode: 0,
        windSpeed: 0,
      };
    }

    return {
      city: capital.city,
      country: capital.country,
      temperature: Math.round(locationData.current.temperature_2m),
      weatherCode: locationData.current.weather_code,
      windSpeed: Math.round(locationData.current.wind_speed_10m),
    };
  });
}
