import { useState, useEffect } from 'react';

// https://blog.webdevsimplified.com/2019-11/how-to-write-custom-hooks/ ----> dica de custom hook para lidar com local storage <----

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
