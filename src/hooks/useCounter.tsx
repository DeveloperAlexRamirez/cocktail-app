import {useState} from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(counter);
  // const [car, setCar] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    calculator(counter + 1 * 8);
  };

  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      return;
    }
  };

  const calculator = (value: number) => {
    setPrice(value);
  };

  return {
    price,
    counter,
    increase,
    decrement,
  };
};
