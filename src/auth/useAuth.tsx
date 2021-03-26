import axios from 'axios';
import {
  IsLoggedContext,
  IsLoggedContextInterface,
} from 'context/IsLoggedContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

interface AuthUserResponse {
  access_token: string;
}

export const useAuth = () => {
  const { push } = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setIsLogged, setToken } = useContext(
    IsLoggedContext
  ) as IsLoggedContextInterface;

  const logoutUser = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const registerUser = async (
    username: string,
    password: string,
    confirmedPassword: string,
    email: string
  ) => {
    setIsLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, {
        username,
        password,
        confirmedPassword,
        email,
      });
      setError(null);
      await authUser(email, password);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  const authUser = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post<AuthUserResponse>(
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

  return { isLoading, error, authUser, logoutUser, registerUser };
};
