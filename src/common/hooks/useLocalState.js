import { useState, useEffect } from "react";

function useLocalState(key, initialState) {
  const [state, setState] = useState(() => {
    const localValue = localStorage.getItem(key);

    return !localValue ? initialState : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalState;
