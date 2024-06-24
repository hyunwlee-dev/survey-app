import { PropsWithChildren } from 'react';
import styles from './container.css';

export default function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
