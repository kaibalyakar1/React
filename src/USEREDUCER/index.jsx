import { useReducer } from "react";

export const Usereducer = () => {
  const initialState = 0;
  const reducer = function (state, action) {
    console.log(reducer);
    switch (action.type) {
      case "increment":
        return state + 1;
        break;

      case "decrement":
        return state - 1;
        break;

      case "reset":
        return initialState;
        break;

      default:
        return state;
    }
  };
  console.log(reducer);
  const [state, disptach] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => disptach({ type: "increment" })}>+</button>
      <button onClick={() => disptach({ type: "decrement" })}>-</button>
      <button onClick={() => disptach({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Usereducer;
// import React, { useReducer } from "react";

// const Index = () => {
//   const initialState = 0;
//   const reducer = function (state, action) {
//     switch (action.type) {
//       case "increment":
//         return state + 1;
//       case "decrement":
//         return state - 1;
//       case "reset":
//         return initialState;
//       default:
//         return state;
//     }
//   };
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       {count}
//       <div>
//         <button onClick={() => dispatch({ type: "increment" })}>+</button>
//         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Index;
