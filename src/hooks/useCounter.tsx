import React from 'react';
import {useState} from 'react';

export const useCounter = (initialState: number) => {
  const [counter, setCounter] = useState((initialState = 1));

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
