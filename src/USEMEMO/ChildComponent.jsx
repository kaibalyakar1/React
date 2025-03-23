import React, { memo, useMemo } from "react";

const ChildComponent = ({ name }) => {
  const memoizedValue = useMemo(() => {
    return name;
  }, [name]);

  const secMomeValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum; // ✅ Now it returns a value
  }, []); // ✅ Empty dependency array → runs only once

  console.log("ChildComponent re-rendered");

  return (
    <div>
      Hello, {memoizedValue}!, {secMomeValue}
    </div>
  );
};

export default memo(ChildComponent);
