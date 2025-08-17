import { GeocodingResult } from '@/types/geocoding';
import styles from './LocationSearch.module.css';
import LocationSearchList from './LocationList';
import SearchInput from './SearchInput';

interface LocationSearchProps {
  locations: GeocodingResult[];
}

export default function LocationSearch({ locations }: LocationSearchProps) {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Search for a location and click it to get detailed weather information.
      </p>
      <SearchInput />
      {locations.length > 0 && <LocationSearchList locations={locations} />}
    </div>
  );
}
