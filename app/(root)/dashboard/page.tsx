import { getUsers } from './data';

export default async function Home() {
  const users = await getUsers();
  return <main>{JSON.stringify(users)}</main>;
}
