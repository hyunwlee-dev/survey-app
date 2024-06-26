import { Suspense } from 'react';
import { SurveyPanel, Board } from '@components';

export default function SurveyPage() {
  return (
    <Board>
      <Suspense>
        <SurveyPanel />
      </Suspense>
    </Board>
  );
}
