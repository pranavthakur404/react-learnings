import React, { useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // reducer : - A function that takes current state and action, then return new state
  // Initial state : - Initial value of state
  // dispatch : - A function used to trigger state update

  return (
    <div className="w-full flex">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
