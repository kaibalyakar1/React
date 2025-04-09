import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Useref = () => {
  const [count, setCount] = useState(0);
  //1st usecase of useref

  const a = useRef(0); // this will not cause re-rendering of the component and the value will be preserved across renders

  //2nd usecase of usref

  const btnref = useRef();
  console.log(btnref.current); // null

  useEffect(() => {
    a.current = a.current + 1; // this will not cause re-rendering of the component and the value will be preserved across renders
    console.log(a.current); // 1
  });

  return (
    <div>
      <h1>useRef</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          btnref.current.style.color = "red";
        }}
        ref={btnref}
      >
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Useref;
