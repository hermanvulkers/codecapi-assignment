import LocationSearch from '@/components/views/dashboard-view/components/location-search/LocationSearch';
import { GeocodingResult } from '@/types/geocoding';
import { CityWeatherData } from '@/types/weather';
import PopularCities from './components/popular-cities/PopularCities';
import styles from './DashboardView.module.css';

interface DashboardViewProps {
  searchedLocations: GeocodingResult[];
  popularCitiesWithWeather: CityWeatherData[];
}

export default function DashboardView({
  searchedLocations,
  popularCitiesWithWeather,
}: DashboardViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LocationSearch locations={searchedLocations} />
        <PopularCities cities={popularCitiesWithWeather} />
      </div>
    </div>
  );
}
