import { WeatherData } from '@/types/weather';
import styles from './LocationDetailView.module.css';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Forecast from './components/forecast/Forecast';

interface CityDetailViewProps {
  locationName: string;
  weather: WeatherData;
}

export default function LocationDetailView({
  locationName,
  weather,
}: CityDetailViewProps) {
  if (!weather?.current || !weather?.daily) {
    return <div>No weather data available for this location.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{locationName}</h1>

      <div className={styles.grid}>
        <CurrentWeather weather={weather.current} />
        <Forecast daily={weather.daily} />
      </div>
    </div>
  );
}
