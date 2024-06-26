import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { StepButtons } from '@components';
import type { PropsWithClassName, SurveyType } from '@types';
import styles from './willingness-revisit-fields.css';

interface WillingnessRevisitFieldsProps {
  title: string;
  question: string;
  placeholder: string;
  register: UseFormRegister<SurveyType>;
  trigger: UseFormTrigger<SurveyType>;
  errors: FieldErrors<SurveyType>;
  prevStep: () => void;
  nextStep: () => void;
}

export default function WillingnessRevisitFields({
  title,
  question,
  placeholder,
  register,
  trigger,
  errors,
  prevStep,
  nextStep,
}: PropsWithClassName<WillingnessRevisitFieldsProps>) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.question}>{question}</h3>
      <input
        type="text"
        placeholder={placeholder}
        {...register('revisit', {
          required: 'This is required',
          pattern: {
            value: /^([1-9]|10)$/,
            message: 'Select 1 to 10',
          },
        })}
      />
      <div className={styles.error}>{errors['revisit']?.message}</div>
      <StepButtons
        prevStep={prevStep}
        nextStep={async () => {
          const result = await trigger('revisit');
          if (result) nextStep();
        }}
      />
    </>
  );
}
