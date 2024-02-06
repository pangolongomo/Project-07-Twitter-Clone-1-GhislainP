import axios from "axios";
import { useEffect } from "react";

function useUpdate({ endpoint, params }) {
  const url = "http://localhost:8000/" + endpoint;
  useEffect(() => {
    console.log("check");
    axios
      .put(url, params)
      .then((res) => {
        console.log("Tweet mis a jour:" + res.data);
      })
      .catch((error) => {
        console.log("Erreur pendant la mise a jour du tweet" + error);
      });
  }, [endpoint]);
}

export default useUpdate;
