import { createContext, useContext, useState } from 'react';

const HasStartedContext = createContext();

export function HasStartedProvider({ children }) {
  const [hasStarted, setHasStarted] = useState(true);

  return (
    <HasStartedContext.Provider value={{ hasStarted, setHasStarted }}>
      {children}
    </HasStartedContext.Provider>
  );
}

export function useHasStarted() {
  return useContext(HasStartedContext);
}
