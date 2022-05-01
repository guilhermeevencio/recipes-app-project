import { useState, useEffect } from 'react';

const getFromLocalStorage = (key, initialValue) => {
  const savedData = JSON.parse(localStorage.getItem(key));
  if (savedData) return savedData;
  return initialValue;
};

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getFromLocalStorage(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
