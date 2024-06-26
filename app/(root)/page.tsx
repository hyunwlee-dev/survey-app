import { Board, SurveyAccessForm } from '@components';
import { Gretting } from '@constants';
import { getTeamList } from './survey/data';

export default async function SurveyPage() {
  const teamList = await getTeamList();
  return (
    <Board headingText={Gretting.TITLE} subText={Gretting.SUB_TITLE}>
      <SurveyAccessForm teamList={teamList} />
    </Board>
  );
}
