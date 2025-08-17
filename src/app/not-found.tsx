import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Page was not found</h1>
      <p className={styles.message}>
        The weather location was not found or does not exist.
      </p>
      <p>
        <Link href="/" className={styles.link}>
          ← Back to home
        </Link>
      </p>
    </section>
  );
}
