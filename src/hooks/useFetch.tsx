import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string, token: string | null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url: string, token: string | null) => {
      if (token) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}${url}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setError(null);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(error.response.message);
          setData(null);
          setIsLoading(false);
        }
      }
    };
    fetchData(url, token);
  }, [token, url]);

  return { data, isLoading, error };
};
