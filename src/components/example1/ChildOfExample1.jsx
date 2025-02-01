import React from "react";

const ChildOfExample1 = React.memo(({ increment }) => {
  console.log("child-render");
  return (
    <div className="w-full">
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default ChildOfExample1;
