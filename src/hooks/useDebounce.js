import { useEffect, useState } from "react";

export default function useDebounce(initial = "", delay = 500) {
  const [debounceValue, setDebounceValue] = useState(initial);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initial);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initial]);

  return debounceValue;
}