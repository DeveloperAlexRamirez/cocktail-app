import {CarState} from './CarContext';

type CarAction = {type: 'increment'} | {type: 'decrement'};

export const carReducer = (state: CarState, action: CarAction): CarState => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        price: state.price + 1,
      };

    case 'decrement':
      return {
        ...state,
        price: state.price - 1,
      };

    default:
      return state;
  }
};
