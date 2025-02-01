import React, { useCallback, useMemo, useState } from "react";
import ChildOfExample1 from "./ChildOfExample1";

const Example1 = () => {
  const [count, setCount] = useState(0);
  console.log("parent render");
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const sum = (value) => {
    console.log("sum function called");

    let temp = 1;
    for (let i = 1; i <= value; i++) {
      temp += i;
    }
    return temp;
  };

  const SumOfHundred = useMemo(() => sum(100000), []);

  return (
    <div className="w-full">
      <h2>Count: {count}</h2>
      <h5>Sum : {SumOfHundred}</h5>
      <ChildOfExample1 increment={increment} />
    </div>
  );
};

export default Example1;
