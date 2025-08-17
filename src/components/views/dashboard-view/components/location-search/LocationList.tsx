import { GeocodingResult } from '@/types/geocoding';
import LocationSearchCard from './LocationSearchCard';
import styles from './LocationList.module.css';

interface LocationSearchListProps {
  locations: GeocodingResult[];
}

export default function LocationSearchList({
  locations,
}: LocationSearchListProps) {
  return (
    <div className={styles.list}>
      {locations.map((location) => (
        <LocationSearchCard key={location.id} location={location} />
      ))}
    </div>
  );
}
