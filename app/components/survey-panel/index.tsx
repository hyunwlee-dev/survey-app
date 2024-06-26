'use client';

import { useSearchParams } from 'next/navigation';
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
import LocalStorage from '@utils/local-storage';

const steps = ['서비스 만족도', '재방문 의사', '시설 만족도', '완료'] as const;

type Steps = (typeof steps)[number];

const storage = new LocalStorage();

export default function SurveyPanel() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
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

  const grade = (data: SurveyType) => {
    const { service, revisit, facility } = data;
    let sum = 0;

    switch (service.toString()) {
      case '매우 불만족':
        sum += 1;
        break;
      case '불만족':
        sum += 2;
        break;
      case '보통':
        sum += 3;
        break;
      case '만족':
        sum += 4;
        break;
      case '매우 만족':
        sum += 5;
        break;
      default:
        sum += 0;
        break;
    }
    sum += Number(revisit);
    sum += facility.length;
    return sum;
  };

  const onSubmit: SubmitHandler<SurveyType> = data => {
    const team = params.get('team');
    const name = params.get('name');
    storage.save({
      team: team as string,
      name: name as string,
      score: grade(data),
    });
    nextStep();
    return data;
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
