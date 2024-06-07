import { FC, PropsWithChildren, useContext } from 'react';
import { TestContext } from './testProvider';

export const Consumer: FC<PropsWithChildren> = ({ children }) => {
  const ctx = useContext(TestContext);

  if (ctx.isLoading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};
