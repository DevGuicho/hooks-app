import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({ data: null, isLoading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            isLoading: false,
            error: null,
            data,
          });
        }
      })
      .catch(() => {
        setstate({
          data: null,
          isLoading: false,
          error: "No se pueden cargar la informacion",
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
