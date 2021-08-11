import {useState} from 'react';

export const useCounter = (initialState: number) => {
  const [counter, setCounter] = useState(initialState);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      return;
    }
  };

  return {
    counter,
    increase,
    decrement,
  };
};
