import type { PropsWithClassName } from '@types';
import styles from './step-buttons.css';

interface StepButtonsProps {
  prevStep?: () => void;
  nextStep: () => Promise<void>;
}

export default function StepButtons({
  prevStep,
  nextStep,
}: PropsWithClassName<StepButtonsProps>) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.stepButton}
        onClick={async () => {
          await nextStep();
        }}
      >
        다음
      </button>
      {prevStep && (
        <button className={styles.stepButton} onClick={prevStep}>
          이전
        </button>
      )}
    </div>
  );
}
