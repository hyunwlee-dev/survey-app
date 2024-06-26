import Link from 'next/link';
import styles from './finish.css';

export default function Finish() {
  return (
    <>
      <h2>설문이 종료되었습니다. 감사합니다.</h2>
      <Link className={styles.homeLink} href={'/'}>
        홈으로
      </Link>
    </>
  );
}
