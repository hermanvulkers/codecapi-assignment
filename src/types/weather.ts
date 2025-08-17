export interface WeatherData {
  latitude: number;
  longitude: number;
  current?: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
    relative_humidity_2m?: number;
    apparent_temperature?: number;
    precipitation?: number;
    pressure_msl?: number;
    wind_direction_10m?: number;
    is_day?: number;
  };
  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_sum?: number[];
    wind_speed_10m_max?: number[];
    precipitation_probability_max?: number[];
  };
}

export interface CityWeatherData {
  city: string;
  country: string;
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}
