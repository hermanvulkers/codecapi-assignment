export const API_CONFIG = {
  geocoding: {
    url: 'https://geocoding-api.open-meteo.com/v1/search',
    resultsLimit: 10,
    cacheDuration: 3600,
  },
  weather: {
    url: 'https://api.open-meteo.com/v1/forecast',
    cacheDuration: 900,
  },
};