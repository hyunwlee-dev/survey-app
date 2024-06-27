import Link from 'next/link';
import { checkLoggedIn } from '@actions/login';
import {
  AverageChart,
  Board,
  StandardDeviationChart,
  SumChart,
} from '@components';
import {
  getTeamScoresAverage,
  getTeamScoresStandardDeviation,
  getTeamScoresSum,
} from './data';
import styles from './page.css';

export default async function DashboardPage() {
  await checkLoggedIn();
  const [{ scoresSum, higherSumTeam }, scoresAverage, scoresStandardDeviation] =
    await Promise.all([
      await getTeamScoresSum(),
      await getTeamScoresAverage(),
      await getTeamScoresStandardDeviation(),
    ]);
  return (
    <Board headingText="DashBoard">
      <Link className={styles.homeLink} href="/">
        홈으로
      </Link>
      <SumChart
        className={styles.sumChart}
        scoresSum={scoresSum}
        higherSumTeam={higherSumTeam as string}
      />
      <AverageChart
        className={styles.averageChart}
        scoresAverage={scoresAverage}
      />
      <StandardDeviationChart
        className={styles.standardDeviationChart}
        scoresStandardDeviation={scoresStandardDeviation}
      />
    </Board>
  );
}
