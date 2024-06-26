import { redirectIfLoggedIn } from '@actions/login';
import { Board, LoginForm } from '@components';
import { LoginGretting } from '@constants';

export default async function LoginPage() {
  await redirectIfLoggedIn();
  return (
    <Board headingText={LoginGretting.TITLE} subText={LoginGretting.SUB_TITLE}>
      <LoginForm />
    </Board>
  );
}
