import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(ket) | String(defaultValue)
      );
    } catch (e) {
      console.log("Failed to save to localStorage:", e);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  localStorage.setItem(key, JSON.stringify(value));
  useEffect(() => {}, [key, value]);

  return [value, setValue];
}
