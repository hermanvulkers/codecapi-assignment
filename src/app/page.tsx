import DashboardView from '@/components/views/dashboard-view/DashboardView';
import { getLocations } from '@/services/get-locations';
import { getPopularCitiesWithWeather } from '@/services/get-popular-cities-with-weather';

interface PageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function DashboardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.query || '';

  const [searchedLocations, popularCitiesWithWeather] = await Promise.all([
    query ? getLocations(query) : Promise.resolve([]),
    getPopularCitiesWithWeather(),
  ]);

  return (
    <DashboardView
      searchedLocations={searchedLocations}
      popularCitiesWithWeather={popularCitiesWithWeather}
    />
  );
}
