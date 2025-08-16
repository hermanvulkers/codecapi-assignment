'use client';

import { useDebouncedCallback } from '@/hooks/utils/use-debounced-callback';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './Search.module.css';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder="Zoek een stad..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
      className={styles.input}
    />
  );
}
