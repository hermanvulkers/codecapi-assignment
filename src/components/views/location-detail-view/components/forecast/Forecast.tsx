import Card from '@/components/ui/card/Card';
import { getWeatherEmoji } from '@/components/views/dashboard-view/components/popular-cities/helpers/get-weather-emoji/get-weather-emoji';
import { getWeatherDescription } from '@/components/views/dashboard-view/components/popular-cities/helpers/get-weather-description/get-weather-description';
import { WeatherData } from '@/types/weather';
import styles from './Forecast.module.css';

interface ForecastProps {
  daily: NonNullable<WeatherData['daily']>;
}

export default function Forecast({ daily }: ForecastProps) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>7-Day Forecast</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className={styles.days}>
          {daily.time.slice(0, 7).map((date, index) => (
            <div key={date} className={styles.day}>
              <span className={styles.dayName}>
                {new Date(date).toLocaleDateString('en-EN', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                })}
              </span>
              
              <span className={styles.weatherIcon}>
                {getWeatherEmoji(daily.weather_code[index])}
              </span>
              
              <span className={styles.weatherDesc}>
                {getWeatherDescription(daily.weather_code[index])}
              </span>
              
              <div className={styles.temperature}>
                <span className={styles.tempMax}>
                  {Math.round(daily.temperature_2m_max[index])}°
                </span>
                <span className={styles.tempMin}>
                  {Math.round(daily.temperature_2m_min[index])}°
                </span>
              </div>
              
              <span className={styles.rain}>
                {daily.precipitation_probability_max && daily.precipitation_probability_max[index] !== undefined ? (
                  <>💧 {daily.precipitation_probability_max[index]}%</>
                ) : (
                  ''
                )}
              </span>
              
              <span className={styles.wind}>
                {daily.wind_speed_10m_max ? (
                  <>💨 {Math.round(daily.wind_speed_10m_max[index])} km/h</>
                ) : (
                  ''
                )}
              </span>
            </div>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
