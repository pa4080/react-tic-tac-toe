/**
 * Reference:
 * > https://www.robinwieruch.de/local-storage-react/#react-local-storage-hook
 */
import { useEffect, useState } from "react";

function useLocalStorage(storageKey, fallbackState = true) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
}

export { useLocalStorage };
