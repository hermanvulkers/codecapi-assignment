import LocationDetailView from '@/components/views/location-detail-view/LocationDetailView';
import { parseLocationSlug } from '@/helpers/parse-location-slug/parse-location-slug';
import { getLocationWeather } from '@/services/get-location-weather';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const location = parseLocationSlug(slug);

  if (!location) {
    notFound();
  }

  const weather = await getLocationWeather(location.lat, location.lon);

  return <LocationDetailView locationName={location.name} weather={weather} />;
}
