import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      console.log('incre')
      return state + payload;
    case DECREMENT:
      console.log('decre')
      return state - payload;
    default:
      console.log('def')
      return state
  }
};

