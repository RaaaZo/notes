import { createContext, useEffect, useState } from 'react';

export interface IsLoggedContextInterface {
  isLogged: boolean;
  token: string | null;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const IsLoggedContext = createContext<IsLoggedContextInterface | null>(
  null
);

export const IsLoggedContextProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const tokenInLocalStorage = localStorage.getItem('token');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(tokenInLocalStorage);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [tokenInLocalStorage]);

  const value = { isLogged, token, setIsLogged, setToken };

  return (
    <IsLoggedContext.Provider value={value}>
      {children}
    </IsLoggedContext.Provider>
  );
};
