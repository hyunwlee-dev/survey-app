import { Board, LoginForm } from '@components';
import { Gretting } from '@constants';

export default async function Home() {
  return (
    <Board headingText={Gretting.TITLE} subText={Gretting.SUB_TITLE}>
      <LoginForm />
    </Board>
  );
}
