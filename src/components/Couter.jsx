import React, { useEffect, useRef, useState } from "react";

const Couter = () => {
  const [count, setCount] = useState(0);
  //   const prevCount = useRef(count);
  let prevCount = count;
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    prevCount = count;
  });

  return (
    <div className="border p-10 flex justify-center items-center gap-10">
      <button onClick={handleDecrement} className="border bg-red-500 p-3">
        Decrement
      </button>
      <h2>{count}</h2>
      <h2>prev : {prevCount}</h2>
      <button onClick={handleIncrement} className="border bg-blue-500 p-3">
        Increment
      </button>
    </div>
  );
};

export default Couter;
