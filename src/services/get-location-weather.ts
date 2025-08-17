import { API_CONFIG } from '@/config/api';
import { WeatherData } from '@/types/weather';

export async function getLocationWeather(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,precipitation,pressure_msl,wind_direction_10m,is_day',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,wind_speed_10m_max,precipitation_probability_max',
    timezone: 'auto',
  });

  const res = await fetch(`${API_CONFIG.weather.url}?${params}`, {
    next: { revalidate: API_CONFIG.weather.cacheDuration },
  });

  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status}`);
  }

  const data = (await res.json()) as WeatherData;
  return data;
}
