import { Container, Logo } from '@components';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
      <Logo />
    </>
  );
}
