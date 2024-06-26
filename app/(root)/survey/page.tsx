import { Suspense } from 'react';
import { createSurvey } from '@actions/createSurvey';
import { SurveyPanel, Board } from '@components';
import type { SurveyInfoType } from '@types';

export default function SurveyPage() {
  return (
    <Board>
      <Suspense>
        <SurveyPanel
          createSurvey={async (surveyInfo: SurveyInfoType) => {
            'use server';
            await createSurvey(surveyInfo);
          }}
        />
      </Suspense>
    </Board>
  );
}
