import { useState } from "react";

const useCounter = (initialState = 1) => {
  const [counter, setcounter] = useState(initialState);

  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter - 1);
  };

  const reset = () => {
    setcounter(initialState);
  };
  return { counter, decrement, increment, reset };
};

export default useCounter;
