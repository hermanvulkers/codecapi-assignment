'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isLocationDetailPage = pathname.startsWith('/location/');

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>🌤️ Weather Dashboard</h1>
        {isLocationDetailPage && (
          <button
            onClick={() => router.back()}
            className={styles.homeLink}
            type="button"
          >
            ← Back
          </button>
        )}
      </div>
    </header>
  );
}
