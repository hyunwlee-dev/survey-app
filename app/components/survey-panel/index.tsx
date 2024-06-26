'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Funnel,
  ServiceSatisfactionFields,
  FacilitySatisfactionFields,
  WillingnessRevisitFields,
  Finish,
} from '@components';
import { Survey } from '@constants';
import type { SurveyType } from '@types';

const steps = ['서비스 만족도', '재방문 의사', '시설 만족도', '완료'] as const;

type Steps = (typeof steps)[number];

export default function SurveyPanel() {
  const [step, setStep] = useState<Steps>('서비스 만족도');
  const currentStep = steps.indexOf(step);
  const isLastStep = currentStep === steps.length;

  const nextStep = () => {
    if (isLastStep) return;
    setStep(steps[currentStep + 1]);
  };

  const prevStep = () => {
    setStep(steps[currentStep - 1]);
  };

  const {
    register,
    formState: { errors },
    trigger,
    watch,
    handleSubmit,
  } = useForm<SurveyType>();

  const onSubmit: SubmitHandler<SurveyType> = data => {
    if (step === '시설 만족도') {
      return data;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Funnel<typeof steps> step={step} steps={steps}>
        <Funnel.Step name="서비스 만족도">
          <ServiceSatisfactionFields
            title={Survey.SERVICE.TITLE}
            question={Survey.SERVICE.QUESTION}
            options={[...Survey.SERVICE.OPTIONS]}
            register={register}
            trigger={trigger}
            errors={errors}
            nextStep={nextStep}
            watch={watch}
          />
        </Funnel.Step>
        <Funnel.Step name="재방문 의사">
          <WillingnessRevisitFields
            title={Survey.REVISIT.TITLE}
            question={Survey.REVISIT.QUESTION}
            placeholder="1 ~ 10"
            register={register}
            trigger={trigger}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </Funnel.Step>
        <Funnel.Step name="시설 만족도">
          <FacilitySatisfactionFields
            title={Survey.FACILITY.TITLE}
            question={Survey.FACILITY.QUESTION}
            options={[...Survey.FACILITY.OPTIONS]}
            register={register}
            trigger={trigger}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
            watch={watch}
          />
        </Funnel.Step>
        <Funnel.Step name="완료">
          <Finish />
        </Funnel.Step>
      </Funnel>
    </form>
  );
}
