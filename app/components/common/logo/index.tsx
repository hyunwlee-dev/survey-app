import clsx from 'clsx';
import type { PropsWithClassName } from '@/app/types';
import LogoIcon from '@icons/logo.svg';
import styles from './logo.css';

/**
 * Responsive Logo component
 */
export default function Logo({ className }: PropsWithClassName) {
  return (
    <>
      <h1 className={styles.srOnly}>info grap</h1>
      <LogoIcon className={clsx(styles.logo, className)} />
    </>
  );
}
