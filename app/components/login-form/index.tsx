import Link from 'next/link';
import { login } from '@actions/login';
import styles from './login-form.css';

export default function LoginForm() {
  return (
    <form>
      <input
        type="text"
        id="email"
        name="email"
        defaultValue="admin@infograb.net"
        placeholder="이메일을 입력하세요."
      />
      <input
        type="password"
        className={styles.nameInput}
        id="password"
        name="password"
        defaultValue="4321"
        placeholder="비밀번호를 입력하세요."
      />
      <button className={styles.surveyButton} type="submit" formAction={login}>
        로그인
      </button>
      <Link className={styles.homeLink} href={'/'}>
        홈으로
      </Link>
    </form>
  );
}
