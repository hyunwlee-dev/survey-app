import { Board, LoginForm } from '@/app/components';
import { LoginGretting } from '@constants';

export default async function LoginPage() {
  return (
    <Board headingText={LoginGretting.TITLE} subText={LoginGretting.SUB_TITLE}>
      <LoginForm />
    </Board>
  );
}
