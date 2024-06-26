import clsx from 'clsx';
import React from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import { StepButtons } from '@components';
import type { PropsWithClassName, SurveyType } from '@types';
import styles from './service-satisfaction-fields.css';

interface ServiceSatisfactionFieldsProps {
  title: string;
  question: string;
  options: string[];
  register: UseFormRegister<SurveyType>;
  trigger: UseFormTrigger<SurveyType>;
  errors: FieldErrors<SurveyType>;
  nextStep: () => void;
  watch: UseFormWatch<SurveyType>;
}

export default function ServiceSatisfactionFields({
  title,
  question,
  options,
  register,
  trigger,
  errors,
  nextStep,
  watch,
}: PropsWithClassName<ServiceSatisfactionFieldsProps>) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.optionList}>
        {options.map((option, idx) => (
          <React.Fragment key={option}>
            <label
              className={clsx(styles.option, {
                [styles.checkedOption]: watch('service')?.toString() === option,
              })}
              htmlFor={option}
            >{`${idx + 1}. ${option}`}</label>
            <input
              className={styles.srOnly}
              type="radio"
              id={option}
              value={option}
              {...register('service', {
                required: 'This is required',
              })}
            />
          </React.Fragment>
        ))}
      </div>
      <div className={styles.error}>{errors['service']?.message}</div>
      <StepButtons
        nextStep={async () => {
          const result = await trigger('service');
          if (result) nextStep();
        }}
      />
    </>
  );
}
