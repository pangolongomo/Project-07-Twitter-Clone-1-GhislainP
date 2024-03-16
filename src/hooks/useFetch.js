import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const API_URL = "http://localhost:4000";

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(() => true);
      try {
        const response = await axios.get(API_URL + endpoint);
        const jsonData = JSON.parse(response.data);
        setData(jsonData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(() => false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetch;
