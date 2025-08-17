import { CityWeatherData } from '@/types/weather';
import styles from './PopularCities.module.css';
import PopularCityCard from './PopularCityCard';

interface PopularCitiesProps {
  cities: CityWeatherData[];
}

export default function PopularCities({ cities }: PopularCitiesProps) {
  if (cities.length === 0) {
    return <div>No popular city information available.</div>;
  }

  return (
    <aside className={styles.container}>
      <h2 className={styles.title}>Popular Cities</h2>
      <div className={styles.list}>
        {cities.map((city) => (
          <PopularCityCard key={`${city.city}-${city.country}`} city={city} />
        ))}
      </div>
    </aside>
  );
}
