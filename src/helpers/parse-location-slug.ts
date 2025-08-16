export function parseLocationSlug(
  slug: string
): { name: string; lat: number; lon: number } | null {
  const parts = slug.split('-');
  if (parts.length < 4) return null;

  const lon = parseInt(parts.pop()!) / 100;
  const lat = parseInt(parts.pop()!) / 100;

  if (isNaN(lat) || isNaN(lon)) return null;

  parts.pop();
  const name = parts.join(' ');

  return { name, lat, lon };
}
