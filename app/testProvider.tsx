import { createContext, useContext, useState } from 'react';
import { Consumer } from './consumer';

export const TestContext = createContext({ isLoading: false });

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <TestContext.Provider value={{ isLoading }}>
      <Consumer>{children}</Consumer>
    </TestContext.Provider>
  );
};
