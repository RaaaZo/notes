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

interface changeDataResponse {
  message: string;
  success: boolean;
}

export const useAuth = () => {
  const { push } = useHistory();
  const [response, setResponse] = useState<changeDataResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setIsLogged, setToken, token } = useContext(
    IsLoggedContext
  ) as IsLoggedContextInterface;

  const logoutUser = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const changeUsername = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.patch<changeDataResponse>(
        `${process.env.REACT_APP_API_BASE_URL}/user/username`,
        {
          username,
          password,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError(null);
      setResponse(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  const changeEmail = async (
    email: string,
    newEmail: string,
    password: string
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.patch<changeDataResponse>(
        `${process.env.REACT_APP_API_BASE_URL}/user/email`,
        {
          email,
          newEmail,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError(null);
      setResponse(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
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

  return {
    isLoading,
    error,
    response,
    authUser,
    logoutUser,
    registerUser,
    changeUsername,
    changeEmail,
  };
};
