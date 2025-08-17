export function parseLocationSlug(
  slug: string
): { name: string; lat: number; lon: number } | null {
  const parts = slug.split('_');

  if (parts.length !== 3) {
    return null;
  }

  const [encodedName, latString, lonString] = parts;

  const lat = parseInt(latString) / 100;
  const lon = parseInt(lonString) / 100;

  if (isNaN(lat) || isNaN(lon)) {
    return null;
  }

  const name = decodeURIComponent(encodedName);

  return { name, lat, lon };
}
