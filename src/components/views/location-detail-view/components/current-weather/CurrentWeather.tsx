import Card from '@/components/ui/card/Card';
import { getWeatherDescription } from '@/components/views/dashboard-view/components/popular-cities/helpers/get-weather-description/get-weather-description';
import { getWeatherEmoji } from '@/components/views/dashboard-view/components/popular-cities/helpers/get-weather-emoji/get-weather-emoji';
import { WeatherData } from '@/types/weather';
import styles from './CurrentWeather.module.css';
import { getWindDirection } from './helper/get-wind-direction';

interface CurrentWeatherProps {
  weather: NonNullable<WeatherData['current']>;
}

export default function CurrentWeather({ weather }: CurrentWeatherProps) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Current Weather</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className={styles.mainInfo}>
          <div className={styles.tempSection}>
            <span className={styles.weatherIcon}>
              {getWeatherEmoji(weather.weather_code)}
            </span>
            <div className={styles.temperatures}>
              <p className={styles.temperature}>
                {Math.round(weather.temperature_2m)}°C
              </p>
              {weather.apparent_temperature !== undefined && (
                <p className={styles.feelsLike}>
                  Feels like {Math.round(weather.apparent_temperature)}°
                </p>
              )}
            </div>
          </div>
          <p className={styles.description}>
            {getWeatherDescription(weather.weather_code)}
          </p>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>💨 Wind</span>
            <span className={styles.detailValue}>
              {Math.round(weather.wind_speed_10m)} km/h
              {weather.wind_direction_10m !== undefined &&
                ` ${getWindDirection(weather.wind_direction_10m)}`}
            </span>
          </div>

          {weather.relative_humidity_2m !== undefined && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>💧 Humidity</span>
              <span className={styles.detailValue}>
                {weather.relative_humidity_2m}%
              </span>
            </div>
          )}

          {weather.precipitation !== undefined && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>🌧️ Precipitation</span>
              <span className={styles.detailValue}>
                {weather.precipitation.toFixed(1)} mm
              </span>
            </div>
          )}

          {weather.pressure_msl !== undefined && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>🔵 Pressure</span>
              <span className={styles.detailValue}>
                {Math.round(weather.pressure_msl)} hPa
              </span>
            </div>
          )}
        </div>
      </Card.Content>
      <Card.Footer>
        <div className={styles.lastUpdated}>
          Last updated:{' '}
          {new Date(weather.time).toLocaleTimeString('en-EN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </div>
      </Card.Footer>
    </Card>
  );
}
