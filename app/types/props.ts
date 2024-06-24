import { PropsWithChildren } from 'react';

export type PropsWithClassName<P = unknown> = PropsWithChildren<
  P & { className?: string }
>;
