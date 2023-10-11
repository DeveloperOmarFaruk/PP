import { useState, useEffect, useCallback } from "react";
import { sendRequest } from "../api/ApiConfig";

function useApiCall(matrix, classs, defaultMin, defaultMax, apiNo) {
  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMin(defaultMin);
    setMax(defaultMax);
  }, [defaultMin, defaultMax]);

  // Memoize the fetchData function outside of the useEffect hook
  const memoizedFetchData = useCallback(async () => {
    if (!min || !max) {
      return;
    }
    
    const info = {
      matrix,
      optimized_label: classs,
      lowPosition: min,
      highPosition: max,
      auto: true,
    };

    setIsLoading(true);
    try {
      // Make an API call based on the current dependency value
      const response = await sendRequest(apiNo, info);
      // Update data with the API response
      setData(response);
    } catch (error) {
      // Handle the error
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [matrix, classs, min, max]);

  useEffect(() => {
    // Call the memoized fetchData function whenever the dependency changes
    memoizedFetchData();
  }, [matrix, classs, min, max]);

  return [min, setMin, max, setMax, data, isLoading, error];
}

export default useApiCall;
