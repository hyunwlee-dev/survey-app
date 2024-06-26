import { redirect } from 'next/navigation';
import { Board, LoginForm } from '@/app/components';
import { LoginGretting } from '@constants';

import { createClient } from '@utils/supabase/server';

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (!error && data?.user) {
    redirect('/dashboard');
  }

  return (
    <Board headingText={LoginGretting.TITLE} subText={LoginGretting.SUB_TITLE}>
      <LoginForm />
    </Board>
  );
}
