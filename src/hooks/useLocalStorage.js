import { useState, useEffect } from 'react';
import { saveToStorage, loadFromStorage } from '../utils/storageHelpers';

export const useLocalStorage = (key, initialValue) => {
  // Initialize state with value from localStorage or initial value
  const [storedValue, setStoredValue] = useState(() => {
    return loadFromStorage(key, initialValue);
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    saveToStorage(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
