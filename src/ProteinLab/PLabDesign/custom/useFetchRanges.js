import { useEffect, useState } from "react";
import { getProteinRanges } from "../api/ApiConfig";

const useFetchRanges = () => {
  const [range, setRange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    const fetchRanges = async () => {
      setLoading(true);
      try {
        const data = await getProteinRanges();
        setRange(data);
      } catch (error) {
        console.error("Error fetching protein ranges:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRanges();
  }, []);

  return { range, loading, error };
};

export default useFetchRanges;
