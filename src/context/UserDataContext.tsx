import { useFetch } from 'hooks/useFetch';
import { createContext, useContext, useMemo, useState } from 'react';
import { IsLoggedContext, IsLoggedContextInterface } from './IsLoggedContext';

interface UserDataInterface {
  username: string;
  email: string;
  notes: [];
  createDate: Date;
}

export interface UserDataContextInterface {
  userData: UserDataInterface | null;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | null>>;
}

export const UserDataContext = createContext<UserDataContextInterface | null>(
  null
);

export const UserDataContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserDataInterface | null>(null);
  const value = { userData, setUserData };

  const { token } = useContext(IsLoggedContext) as IsLoggedContextInterface;

  const { data } = useFetch('/user', token!);

  useMemo(() => setUserData(data), [data]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
