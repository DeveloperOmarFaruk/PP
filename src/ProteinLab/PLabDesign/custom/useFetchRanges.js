import { useEffect, useState } from "react";
import { getProteinRanges } from "../api/ApiConfig";

const useFetchRanges = () => {
  const [range, setRange] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchRanges = async () => {
      setloading(true);
      const data = await getProteinRanges();
      setRange(data);
      setloading(false);
    };

    fetchRanges();
  }, []);

  return { range, loading };
};

export default useFetchRanges;
