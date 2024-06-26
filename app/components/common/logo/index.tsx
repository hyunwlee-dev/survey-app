import clsx from 'clsx';
import LogoIcon from '@icons/logo.svg';
import type { PropsWithClassName } from '@types';
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
