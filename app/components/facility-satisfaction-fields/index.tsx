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
import styles from './facility-satisfaction-fields.css';

interface FacilitySatisfactionFieldsProps {
  title: string;
  question: string;
  options: string[];
  register: UseFormRegister<SurveyType>;
  trigger: UseFormTrigger<SurveyType>;
  errors: FieldErrors<SurveyType>;
  prevStep: () => void;
  nextStep: () => void;
  watch: UseFormWatch<SurveyType>;
}

export default function FacilitySatisfactionFields({
  title,
  question,
  options,
  register,
  trigger,
  errors,
  prevStep,
  nextStep,
  watch,
}: PropsWithClassName<FacilitySatisfactionFieldsProps>) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.question}>{question}</h3>
      <ul className={styles.optionList}>
        {options.map((option, idx) => (
          <React.Fragment key={option}>
            <label
              className={clsx(styles.option, {
                [styles.checkedOption]: watch('facility')
                  ? watch('facility')?.includes(
                      option as
                        | '프론트 응대'
                        | '시설의 청결'
                        | '합리적인 가격'
                        | '편리한 위치'
                        | '인테리어',
                    )
                  : false,
              })}
              htmlFor={option}
            >{`${idx + 1}. ${option}`}</label>
            <input
              className={styles.srOnly}
              id={option}
              type="checkbox"
              value={option}
              {...register('facility', {
                required: 'This is required',
              })}
            />
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.error}>{errors['facility']?.message}</div>
      <StepButtons
        prevStep={prevStep}
        nextStep={async () => {
          const result = await trigger('facility');
          if (result) nextStep();
        }}
      />
    </>
  );
}
