import React, { useCallback, useState } from "react";
import Button from "./Button";

const Usecallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    // memoizing function using useCallback

    console.log("Incremented");
    setCount((prev) => prev + 1);
  }, []); //empty array as second argument

  const decrement = useCallback(() => {
    // memoizing function using useCallback
    console.log("Decremented");
    setCount((prev) => prev - 1);
  }, []); //empty array as second argument
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default Usecallback;
