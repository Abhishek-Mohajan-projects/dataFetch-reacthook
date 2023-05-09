import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, getData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching is not success");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          getData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
