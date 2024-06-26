import { checkLoggedIn } from '@actions/login';

export default async function DashboardPage() {
  const { user } = await checkLoggedIn();

  return <p>안녕하세요, {user.email}</p>;
}
