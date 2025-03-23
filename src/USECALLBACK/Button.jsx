import React, { memo } from "react";

const Button = ({ children, onClick }) => {
  console.log(children, "children");
  return (
    <div>
      <button
        className={`text-black mb-4 py-2 px-5 ${
          children === "Increment" ? "bg-green-500" : "bg-red-500"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default memo(Button); //memoizing Button;
