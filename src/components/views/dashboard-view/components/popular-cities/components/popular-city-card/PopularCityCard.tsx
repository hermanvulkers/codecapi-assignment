import { CityWeatherData } from '@/types/weather';
import { getWeatherDescription } from '../../helpers/get-weather-description/get-weather-description';
import { getWeatherEmoji } from '../../helpers/get-weather-emoji/get-weather-emoji';
import styles from './PopularCityCard.module.css';

interface PopularCityCardProps {
  city: CityWeatherData;
}

export default function PopularCityCard({ city }: PopularCityCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.location}>
          <span className={styles.name}>{city.city}</span>
          <span className={styles.country}>{city.country}</span>
        </div>
        <span className={styles.emoji}>
          {getWeatherEmoji(city.weatherCode)}
        </span>
      </div>

      <div className={styles.details}>
        <div className={styles.temperature}>
          <span className={styles.temp}>{city.temperature}°</span>
          <span className={styles.weather}>
            {getWeatherDescription(city.weatherCode)}
          </span>
        </div>
        <div className={styles.wind}>
          <span className={styles.windIcon}>💨</span>
          <span className={styles.windSpeed}>{city.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
