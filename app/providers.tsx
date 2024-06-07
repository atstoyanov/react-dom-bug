'use client';

import { TestProvider } from './testProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <TestProvider>{children}</TestProvider>;
}
