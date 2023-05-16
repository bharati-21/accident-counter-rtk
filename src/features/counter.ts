import { createAction } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initalState: CounterState = {
  count: 0
};

type CounterAction =
  | {
      type: "counter/increment" | "counter/decrement";
      payload: number;
    }
  | {
      type: "counter/reset";
    };

const increment = createAction("counter/increment", (amount: number) => {
  return {
    payload: amount
  };
});
const decrement = createAction("counter/decrement", (amount: number) => ({
  payload: amount
}));

const reset = createAction("counter/reset");

export const counterReducer = (state = initalState, action: CounterAction) => {
  switch (action.type) {
    case increment.type:
      return {
        count: state.count + action.payload
      };
    case decrement.type:
      return {
        count: state.count - action.payload
      };
    case reset.type:
      return {
        count: 0
      };
    default:
      return state;
  }
};
