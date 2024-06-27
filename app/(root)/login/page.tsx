import { checkLoggedOut } from '@actions/login';
import { Board, LoginForm } from '@components';
import { LoginGretting } from '@constants';

export default async function LoginPage() {
  await checkLoggedOut();
  return (
    <Board headingText={LoginGretting.TITLE} subText={LoginGretting.SUB_TITLE}>
      <LoginForm />
    </Board>
  );
}
