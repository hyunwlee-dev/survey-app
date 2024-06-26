import { Board, SurveyAccessForm } from '@components';
import { Gretting } from '@constants';

export default async function SurveyPage() {
  return (
    <Board headingText={Gretting.TITLE} subText={Gretting.SUB_TITLE}>
      <SurveyAccessForm />
    </Board>
  );
}
