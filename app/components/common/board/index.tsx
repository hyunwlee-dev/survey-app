import clsx from 'clsx';
import { PropsWithClassName } from '@/app/types';
import styles from './board.css';

interface IBoard {
  headingText?: string;
  subText?: string;
}

export default function Board({
  headingText,
  subText,
  className,
  children,
}: PropsWithClassName<IBoard>) {
  return (
    <main className={clsx(styles.board, className)}>
      {headingText && <h2 className={styles.heading}>{headingText}</h2>}
      {subText && <h3 className={styles.sub}>{subText}</h3>}
      <section>{children}</section>
    </main>
  );
}
