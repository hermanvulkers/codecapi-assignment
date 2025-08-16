import CityList from '@/components/CityList';
import Search from '@/components/Search';
import { getLocations } from '@/services/get-locations';
import styles from './page.module.css';

interface PageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.query || '';
  const cities = query ? await getLocations(query) : [];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Weather Dashboard</h1>
        <p className={styles.description}>
          Zoek een stad om het weer te bekijken
        </p>

        <Search />

        {query && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Resultaten voor {query}</h2>
            <CityList cities={cities} />
          </div>
        )}
      </main>
    </div>
  );
}
