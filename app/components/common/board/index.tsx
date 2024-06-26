import clsx from 'clsx';
import StarIcon from '@icons/icon-star.svg';
import type { PropsWithClassName } from '@types';
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
    <section className={clsx(styles.board, className)}>
      {headingText && (
        <div className={styles.headingWrapper}>
          <StarIcon className={styles.starIcon} />
          <h2 className={styles.heading}>{headingText}</h2>
        </div>
      )}
      {subText && <h3 className={styles.sub}>{subText}</h3>}
      {children}
    </section>
  );
}
