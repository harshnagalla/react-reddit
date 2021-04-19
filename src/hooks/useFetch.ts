import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query: any, page: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<any>([]);

  const sendQuery = useCallback(
    async (query: any) => {
      try {
        await setLoading(true);
        await setError(false);
        const res = await axios.get(
          "https://www.reddit.com/r/wallstreetbets/hot.json"
        );
        await setList((prev: any) => [...prev, ...res.data.data.children]);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    },
    [query, page]
  );

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
