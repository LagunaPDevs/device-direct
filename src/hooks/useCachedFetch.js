import { useState, useEffect, useCallback } from "react";

import { useSnackbar } from "notistack";

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour to milliseconds

export function useCachedFetch({ url, fetchOptions = {} }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const URL_TIMESTAMP_CONST = `${url}_timestamp`;

  const cachedData = localStorage.getItem(url);
  const cachedTimestamp = localStorage.getItem(URL_TIMESTAMP_CONST);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      saveAndStoreResult(jsonData);
    } catch (err) {
      setError(err.message);
      enqueueSnackbar(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, fetchOptions]);

  useEffect(() => {
    if (cachedData && cachedTimestamp) {
      handleStoragedData();
    } else {
      fetchData();
    }
  }, []);

  const saveAndStoreResult = (jsonData) => {
    setData(jsonData);
    localStorage.setItem(url, JSON.stringify(jsonData));
    localStorage.setItem(URL_TIMESTAMP_CONST, Date.now().toString());
  };

  const handleStoragedData = () => {
    const expirationTime =
      parseInt(cachedTimestamp, 10) + CACHE_EXPIRATION_TIME;
    if (Date.now() < expirationTime) {
      setData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  };

  return { data, error, isLoading, revalidate: fetchData };
}
