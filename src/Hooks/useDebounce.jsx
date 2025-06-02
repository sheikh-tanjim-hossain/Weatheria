import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay) {
  const timeoutIdRef = useRef(null);

  const debouncedCalllback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return debouncedCalllback;
}
