import { createLocationSlug } from '@/helpers/create-location-slug/create-location-slug';
import { getFeatureDescription } from './helpers/get-feature-description/get-feature-description';
import { GeocodingResult } from '@/types/geocoding';
import Link from 'next/link';
import styles from './LocationSearchCard.module.css';

interface LocationSearchCardProps {
  location: GeocodingResult;
}

export default function LocationSearchCard({ location }: LocationSearchCardProps) {
  return (
    <Link
      href={`/location/${createLocationSlug(location)}`}
      className={styles.card}
    >
      <h3 className={styles.name}>
        {location.name}
        {getFeatureDescription(location.feature_code) && (
          <span className={styles.featureType}>
            {getFeatureDescription(location.feature_code)}
          </span>
        )}
      </h3>
      <p className={styles.details}>
        {[location.admin1, location.country || location.country_code]
          .filter(Boolean)
          .join(', ')}
      </p>
      <div className={styles.metadata}>
        <span className={styles.coordinates}>
          {location.latitude.toFixed(2)}°, {location.longitude.toFixed(2)}°
        </span>
        {location.elevation && (
          <span className={styles.elevation}>
            {location.elevation}m elevation
          </span>
        )}
        {location.population && (
          <span className={styles.population}>
            {location.population.toLocaleString('en-EN')} residents
          </span>
        )}
      </div>
    </Link>
  );
}