'use client';

import { useFormState } from 'react-dom';
import { login } from '@actions/login';
import styles from './login-form.css';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={dispatch}>
      <input type="text" id="team" name="team" placeholder="팀을 입력하세요." />
      <input
        type="text"
        className={styles.nameInput}
        id="name"
        name="name"
        placeholder="이름을 입력하세요."
      />
      <div className={styles.error}>{errorMessage && <>{errorMessage}</>}</div>
      <button className={styles.surveyButton} type="submit">
        설문 시작하기
      </button>
    </form>
  );
}
