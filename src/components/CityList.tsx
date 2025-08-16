import { createLocationSlug } from '@/helpers/create-location-slug';
import { GeocodingResult } from '@/types/geocoding';
import Link from 'next/link';
import styles from './CityList.module.css';

interface CityListProps {
  cities: GeocodingResult[];
}

export default function CityList({ cities }: CityListProps) {
  if (cities.length === 0) {
    return <p className={styles.empty}>Geen resultaten gevonden</p>;
  }

  return (
    <div className={styles.list}>
      {cities.map((city) => (
        <Link
          key={city.id}
          href={`/city/${createLocationSlug(city)}`}
          className={styles.card}
        >
          <h3 className={styles.name}>{city.name}</h3>
          <p className={styles.details}>
            {city.admin1 && `${city.admin1}, `}
            {city.country || city.country_code}
          </p>
          {city.population && (
            <p className={styles.population}>
              {city.population.toLocaleString('nl-NL')} inwoners
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
