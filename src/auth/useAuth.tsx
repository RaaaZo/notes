import axios from 'axios';
import {
  IsLoggedContext,
  IsLoggedContextInterface,
} from 'context/IsLoggedContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

interface Response {
  access_token: string;
}

export const useAuth = () => {
  const { push } = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setIsLogged } = useContext(
    IsLoggedContext
  ) as IsLoggedContextInterface;

  const clearLocalStorageToken = () => {
    localStorage.removeItem('token');
  };

  const authUser = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post<Response>(
        `${process.env.REACT_APP_API_BASE_URL}/user/login`,
        {
          email,
          password,
        }
      );
      localStorage.setItem('token', response.data.access_token);
      setError(null);
      setIsLoading(false);
      setIsLogged(true);
      push('/');
    } catch (error) {
      setError(error.response.data.message);
      setIsLogged(false);
      setIsLoading(false);
    }
  };

  return { isLoading, error, authUser, clearLocalStorageToken };
};
