import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(endpoint, params = {}) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost:7000/" + endpoint;
console.log();
    axios({
      url: url,
      method: "GET",
      params: params,
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("N'as pas pu charger les données");
        }
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        if (err.code === "ERR_NETWORK") {
          setError("Erreur Reseau");
        } else {
          setError(err.message);
        }
      });
  }, [endpoint, params.id, params.username]);

  return { data, isPending, error };
}

export default useFetch;
