'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { surveyAccess } from '@actions/survey-access';
import styles from './survey-access-form.css';

export default function SurveyAccessForm() {
  const [errorMessage, dispatch] = useFormState(surveyAccess, undefined);
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
      <Link className={styles.dashboardLink} href={'/dashboard'}>
        대시보드
      </Link>
    </form>
  );
}