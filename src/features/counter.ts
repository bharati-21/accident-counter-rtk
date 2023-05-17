import { createAction, createReducer } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initalState: CounterState = {
  count: 0
};

// type CounterAction =
//   | {
//       type: "counter/increment" | "counter/decrement";
//       payload: number;
//     }
//   | {
//       type: "counter/reset";
//     };

export const increment = createAction("counter/increment", (amount: number) => {
  return {
    payload: amount
  };
});
export const decrement = createAction(
  "counter/decrement",
  (amount: number) => ({
    payload: amount
  })
);

export const reset = createAction("counter/reset");

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const counterReducer2 = createReducer(initalState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.count += action.payload;
    })
    .addCase(decrement, (state, action) => {
      state.count -= action.payload;
    })
    .addCase(reset, (state) => {
      state.count = 0;
    });
});

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
