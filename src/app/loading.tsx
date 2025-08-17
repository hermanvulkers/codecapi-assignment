import Spinner from '@/components/ui/spinner/Spinner';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <Spinner size="large" />
    </div>
  );
}