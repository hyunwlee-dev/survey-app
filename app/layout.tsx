import type { Metadata } from 'next';
import 'normalize.css';
import '@styles/global.css';
import { robotoMono } from './styles/font';

const title = process.env.NEXT_PUBLIC_TITLE || '';
const description = process.env.NEXT_PUBLIC_DESCRIPTION || '';
const url = process.env.NEXT_PUBLIC_URL || '';
const ogi = process.env.NEXT_PUBLIC_OG_IMAGE || '';

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title || '',
  },
  icons: {
    icon: '/icons/logo.svg',
  },
  description: description,
  authors: {
    name: 'hyunwlee',
  },
  keywords: ['survey', 'quiz'],
  metadataBase: new URL(url as string),
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: [ogi as string],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [ogi as string],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
