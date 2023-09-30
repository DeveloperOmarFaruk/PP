import React, { useState, useEffect } from "react";
import axios from "axios"; // Example HTTP library dependency
import { sendRequest } from "../api/ApiConfig";

function useApiCall(matrix, classs, defaultMin, defaultMax, apiNo) {
  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const info = {
        matrix: matrix,
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
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call fetchData whenever the dependency changes
    fetchData();
  }, [matrix, classs, min, max]);

  return [min, setMin, max, setMax, data, isLoading];
}

export default useApiCall;
