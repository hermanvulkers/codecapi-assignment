'use client';

import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className={styles.container} role="alert">
      <h1 className={styles.title}>Er ging iets mis</h1>
      <p className={styles.message}>Kon de data niet ophalen. Probeer het opnieuw.</p>
      <button className={styles.button} onClick={() => reset()}>
        Opnieuw proberen
      </button>
      <pre className={styles.error}>{error.message}</pre>
    </section>
  );
}
