import { useEffect, useState } from 'react';

export function useDebounce({value, milliseconds}) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliseconds);
    return () => clearTimeout(handler);
  }, [value, milliseconds]);

  return debouncedValue;
}
