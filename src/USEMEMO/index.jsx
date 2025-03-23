import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const Memo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
      <ChildComponent name={"John Doe"} />
    </div>
  );
};

export default Memo;
