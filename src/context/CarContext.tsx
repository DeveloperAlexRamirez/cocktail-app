import React, {createContext, useReducer, useState} from 'react';
import {carReducer} from './carReducer';

export interface CarState {
  price: number;
  accumulated: number;
}

export const carInitialState: CarState = {
  accumulated: 0,
  price: 0,
};

export interface CarContextProps {
  carState: CarState;
  increment: () => void;
  decrement: () => void;
}

// Crear el context
export const CarContext = createContext({} as CarContextProps);

// Provider
const CarProvider = ({children}: any) => {
  const [carState, dispatch] = useReducer(carReducer, carInitialState);

  const increment = () => {
    dispatch({type: 'increment'});
  };

  const decrement = () => {
    if (carState.price >= 1) {
      dispatch({type: 'decrement'});
      return;
    }
  };

  return (
    <CarContext.Provider
      value={{
        carState,
        increment,
        decrement,
      }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
